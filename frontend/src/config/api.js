const URL_API = 'https://<hash.execute-api.region>.amazonaws.com/dev/analyze?imageUrl=';

export default (imageUrl, config = {}) => {
  return fetch(`${URL_API}${imageUrl}`, config)
}