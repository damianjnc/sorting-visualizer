// @flow

import React from 'react'

import { ArrayBar, Wrapper } from './styled'

export const SortingVisualizer = ({ array, onMergeSort, onResetArray }) => (
  <Wrapper>
    {array.map((value, index) => (
      <ArrayBar className="single-bar" key={index} barHeight={value} />
    ))}
    <button onClick={onResetArray}>Generate New Array</button>
    <button onClick={onMergeSort}>Merge Sort!</button>
  </Wrapper>
)

export default SortingVisualizer
