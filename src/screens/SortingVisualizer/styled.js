// @flow

import styled from 'styled-components'

const getHeight = ({ barHeight }): string => `height: ${barHeight}px`

export const ArrayBar = styled.div`
  ${getHeight};
  width: 2px;
  backgroundcolor: ;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 100px;
`
