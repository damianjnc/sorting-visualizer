// @flow

import styled from 'styled-components'

import colors from 'styles/colors'

export const ArrayBar = styled.div.attrs(({ barHeight }) => ({
  style: { height: `${barHeight}px` }
}))`
  width: 4px;
  background-color: ${colors.pink};
  display: inline-block;
  margin: 0 1px;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 100px;
`
