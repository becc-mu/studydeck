const length = 3 //valid index values: 0, 1, 2
const currentIndex = 0

export const CurrentNext = () => {
  let nextIndex
  if (nextIndex === 'next') {
    nextIndex = (currentIndex + 1) % length
  }
  if (nextIndex === 'previous') {
    nextIndex = (currentIndex - 1 + length) % length
  }
  return nextIndex
}
// //moving forward
// const nextIndex = (currentIndex + 1) % length
// //moving previous
// const nextIndex = (currentIndex - 1 + length) % length

// nextIndex
