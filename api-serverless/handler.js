'use strict';
const aws = require('aws-sdk');
const { get } = require('axios').default

class Handler {
  constructor({ rekoService, translateService }) {
    this.rekoService = rekoService
    this.translateService = translateService
  }

  async translateText(text) {
    const params = {
      SourceLanguageCode: 'en',
      TargetLanguageCode: 'pt',
      Text: text,
    };

    const {TranslatedText} = await this.translateService.translateText(params).promise()
    return TranslatedText.split(' e ')
  }

  async detectImageLabels(buffer) {
    const result = await this.rekoService.detectLabels({
      Image: {
        Bytes: buffer
      }
    }).promise();

    const workingItems = result.Labels
      .filter(item => item.Confidence > 80);

    const names = workingItems
      .map(({ Name }) => Name)
      .join(' and ')

    return { names, workingItems }
  }

  formatResponse(texts, workingItems) {
    const responseFinal = [];

    for(const index in texts) {
      const nameInPortuguese = texts[index];
      const {Confidence} = workingItems[index];

      responseFinal.push({
        name: nameInPortuguese,
        confidence: Confidence.toFixed(2)
      })
    }
    return responseFinal
  }

  async getImage(url) {
    const response = await get(url, {
      responseType: 'arraybuffer'
    })
    const buffer = Buffer.from(response.data, 'base64');
    return buffer
  }

  async main(event) {
    try {
      const { imageUrl } = event.queryStringParameters;
      
      console.log('download image...')
      const imgBuffer = await this.getImage(imageUrl)

      console.log('detect image...')
      const { names, workingItems } = await this.detectImageLabels(imgBuffer);
      
      console.log('translate text...')
      const textsInPortuguese = await this.translateText(names);

      console.log('make response')
      const response = this.formatResponse(textsInPortuguese, workingItems)

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(response)
      }
    } catch (err) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: 'Internal server error'
      }
    }
  }
}

// factory
const reko = new aws.Rekognition()
const translate = new aws.Translate()
const handler = new Handler({
  rekoService: reko,
  translateService: translate
});

module.exports.main = handler.main.bind(handler)