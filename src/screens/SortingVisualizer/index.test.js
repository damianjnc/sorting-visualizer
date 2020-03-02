// @flow

import { useState, useEffect } from 'react'
import { usePrepareComponent } from '.'

jest.mock('react', () => ({
  useState: jest.fn(() => ['array', 'setArray']),
  useEffect: jest.fn(() => {})
}))
jest.mock('./SortingVisualizer', () => 'SortingVisualizer')

const ONE = 1

describe('screens > SortingVisualizer', () => {
  describe('usePrepareComponent', () => {
    it('returns an array', () => {
      const props = usePrepareComponent()

      expect(useState).toHaveBeenCalledTimes(ONE)
      expect(useEffect).toHaveBeenCalledTimes(ONE)
      expect(props.array).toBe('array')
    })
  })
})
