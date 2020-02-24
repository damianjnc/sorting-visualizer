// @flow

import { useEffect, useState } from 'react'

import prepareComponent from 'hocs/prepareComponent'
import SortingVisualizer from './SortingVisualizer'
import {
  handleMergeSort,
  handleRandomIntGenerate,
  handleResetArray
} from './handlers'

export type Props = {
  +array: [],
  +onMergeSort: () => void,
  +onResetArray: () => void
}

export const usePrepareComponent = (): Props => {
  const [array, setArray] = useState([])
  useEffect(() => {
    handleResetArray(setArray)(handleRandomIntGenerate)()
  }, [])

  return {
    array,
    onMergeSort: handleMergeSort(array),
    onResetArray: handleResetArray(setArray)(handleRandomIntGenerate)
  }
}

export default prepareComponent<any, Props>(usePrepareComponent)(
  SortingVisualizer
)
