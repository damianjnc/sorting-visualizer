import { useEffect, useState } from 'react'

import prepareComponent from '../../hoc/prepareComponent'
import SortingVisualizer from './SortingVisualizer'

export const handleRandomIntGenerate = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const handleResetArray = setArray => (handleRandomIntGenerate): void => {
  const array = []
  for (let i = 0; i < 100; i++) {
    array.push(handleRandomIntGenerate(5, 1000))
  }

  setArray(array)
}

export const usePrepareComponent = (): void => {
  const [array, setArray] = useState([])
  useEffect(() => {
    handleResetArray(setArray)(handleRandomIntGenerate)
  }, [])

  return {
    array
  }
}

export default prepareComponent(usePrepareComponent)(SortingVisualizer)
