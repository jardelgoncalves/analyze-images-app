import React from 'react';

import { Pulse as PulseWrapper, Wrapper } from './styles';

const Pulse = () => (
  <PulseWrapper>
    <div />
    <div />
  </PulseWrapper>
);

const Loading = () => (
  <Wrapper>
    <Pulse />
  </Wrapper>
);

export { Loading };
