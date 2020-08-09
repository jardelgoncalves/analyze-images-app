import React from 'react';

import { Wrapper, Bar } from './styles';

export const ProgressBar = ({ percentage = 10, label = '', className = '' }) => (
  <Wrapper className={className}>
    <span className="label">{label}</span>
    <Bar percentage={percentage}>
      <div>
        <span>
          {percentage ? `${percentage}%` : ''}
        </span>
      </div>
    </Bar>
  </Wrapper>
);
