import React, { useState, useCallback } from 'react';
import {
  Icon,
  Container,
  Input,
  ProgressBar,
  Photo,
  RaisedButton,
  Loading,
  Alert,
  Global,
} from './components';

import api from './config/api';

function App() {
  const [state, setState] = useState({
    text: '',
    data: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    setState(old => ({
      data: [],
      [name]: value
    }))
  };

  const goToBottom = useCallback(
    () => {
      window.scrollTo({
        top: 900,
        behavior: 'smooth',
      })
    },
    []
  )

  const fetchApi = async () => {
    const { text } = state;
    try {
      setLoading(true)
      const data = await (await api(text)).json()

      setState(old => ({ ...old, data }))
      goToBottom()
      setError('')
    } catch (err) {
      setError('URL inválida ou imagem não encontrada')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Global />
      <Container>
        <Icon />
        <h2>Identificador de imagens</h2>
        <div className="container-form">
          <Input onChange={onInputChange} name="text" value={state.text} />
          <RaisedButton onClick={fetchApi} loading={loading} />
        </div>
        {loading && (
          <Loading />
        )}
        {
          Boolean(!error) ? (
            <div className="container-result">
              {Boolean(state.data.length && state.text) && (
               <>
                  <Photo image={state.text} />
                  {state.data.map(d =>
                    <ProgressBar
                      key={d.name}
                      label={d.name}
                      percentage={Number(d.confidence)}
                    />
                  )}
                </>
              )}
            </div>
          ) : (
            <Alert text={error} />
          )
        }
      </Container>
    </>
  );
}

export default App;
