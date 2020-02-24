// @flow

import { mergeSort } from 'screens/sortingAlgorithms'
import colors from 'styles/colors'

const ANIMATION_SPEED = 1
const NUMBER_OF_ARRAY_BARS = 250

export const handleRandomIntGenerate = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const handleResetArray = setArray => handleRandomIntGenerate => (): void => {
  const array = []
  for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
    array.push(handleRandomIntGenerate(5, 800))
  }
  setArray(array)
}

export const handleMergeSort = array => () => {
  const animations = mergeSort(array)
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('single-bar')
    const isColorChange = i % 3 !== 2
    if (isColorChange) {
      const [barOneIndex, barTwoIndex] = animations[i]
      const barOneStyle = arrayBars[barOneIndex].style
      const barTwoStyle = arrayBars[barTwoIndex].style
      const color = i % 3 === 0 ? colors.sweetBrown : colors.turquoise
      setTimeout(() => {
        barOneStyle.backgroundColor = color
        barTwoStyle.backgroundColor = color
      }, i * ANIMATION_SPEED)
    } else {
      setTimeout(() => {
        const [barOneIndex, newHeight] = animations[i]
        const barOneStyle = arrayBars[barOneIndex].style
        barOneStyle.height = `${newHeight}px`
      }, i * ANIMATION_SPEED)
    }
  }
}
