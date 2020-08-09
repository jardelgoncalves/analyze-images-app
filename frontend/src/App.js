import React from 'react';
import {
  Icon,
  Container,
  Input,
  ProgressBar,
  Photo,
  RaisedButton,
  Global,
} from './components';

function App() {
  return (
    <>
      <Global />
      <Container>
        <Icon />
        <h2>Identificador de imagens</h2>
        <div className="container-form">
          <Input />
          <RaisedButton />
        </div>
        <dic className="container-result">
          <Photo image="https://i.pinimg.com/originals/af/8b/e5/af8be54bde8aedec28710a93d2b4c563.jpg" />
        </dic>
        <ProgressBar label="Animal" />
        <ProgressBar label="Gato" percentage={90} />
      </Container>
    </>
  );
}

export default App;
