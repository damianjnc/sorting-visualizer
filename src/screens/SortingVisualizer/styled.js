// @flow

import styled from 'styled-components'

import colors from 'styles/colors'

const getHeight = ({ barHeight }): string => `height: ${barHeight}px`

export const ArrayBar = styled.div`
  ${getHeight};
  width: 4px;
  background-color: ${colors.pink};
  display: inline-block;
  margin: 0 1px;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 100px;
`
