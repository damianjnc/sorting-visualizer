// @flow

export const mergeSort = (array: number[]) => {
  const animations = []
  if (array.length <= 1) return array
  const auxiliaryArray = array.slice()
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
  console.log('animations', animations)
  return animations
}

const mergeSortHelper = (
  mainArray,
  startIndex,
  endIndex,
  auxiliaryArray,
  animations
) => {
  if (startIndex === endIndex) return
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  mergeSortHelper(
    auxiliaryArray,
    startIndex,
    middleIndex,
    mainArray,
    animations
  )
  mergeSortHelper(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    mainArray,
    animations
  )
  doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations
  )
}

function doMerge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  let k = startIndex
  let i = startIndex
  let j = middleIndex + 1
  while (i <= middleIndex && j <= endIndex) {
    animations.push([i, j])
    animations.push([i, j])
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[i++]
    } else {
      animations.push([k, auxiliaryArray[j]])
      mainArray[k++] = auxiliaryArray[j++]
    }
  }
  while (i <= middleIndex) {
    animations.push([i, i])
    animations.push([i, i])
    animations.push([k, auxiliaryArray[i]])
    mainArray[k++] = auxiliaryArray[i++]
  }
  while (j <= endIndex) {
    animations.push([j, j])
    animations.push([j, j])
    animations.push([k, auxiliaryArray[j]])
    mainArray[k++] = auxiliaryArray[j++]
  }
}

// export const mergeSort = (array, animation) => {
//   if (array.length === 1) return array
//
//   const middleIndex = Math.floor(array.length / 2)
//   const firstHalf = mergeSort(array.slice(0, middleIndex))
//   const secondHalf = mergeSort(array.slice(middleIndex))
//   const sortedArray = []
//
//   let i = 0
//   let j = 0
//   while (i < firstHalf.length && j < secondHalf.length) {
//     if (firstHalf[i] < secondHalf[j]) {
//       sortedArray.push(firstHalf[i++])
//     } else {
//       sortedArray.push(secondHalf[j++])
//     }
//   }
//
//   while (i < firstHalf.length) sortedArray.push(firstHalf[i++])
//   while (j < secondHalf.length) sortedArray.push(secondHalf[j++])
//   return sortedArray
// }
