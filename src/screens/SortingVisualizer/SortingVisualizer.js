// @flow

import React from 'react'

import { ArrayBar, Wrapper } from './styled'

export const SortingVisualizer = ({ array }) => (
  <Wrapper>
    {array.map((value, index) => (
      <ArrayBar key={index} barHeight={value}>
        {value}
      </ArrayBar>
    ))}
  </Wrapper>
)

export default SortingVisualizer
