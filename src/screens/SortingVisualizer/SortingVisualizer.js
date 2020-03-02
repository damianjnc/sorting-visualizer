// @flow

import React from 'react'

import { ArrayBar, Wrapper } from './styled'
import { type Props } from '.'

export const SortingVisualizer = ({
  array,
  onMergeSort,
  onResetArray
}: Props) => (
  <Wrapper>
    {array.map((value, index) => (
      <ArrayBar className="single-bar" key={index} barHeight={value} />
    ))}
    <button onClick={onResetArray}>Generate New Array</button>
    <button onClick={onMergeSort}>Merge Sort!</button>
  </Wrapper>
)

export default SortingVisualizer
