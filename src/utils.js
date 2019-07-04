export const toDegrees = radians => (radians * 180) / Math.PI
export const toRadians = degrees => (degrees * Math.PI) / 180

export const getRange = length => [...Array(length).keys()]
export const getRandomFrom = (...args) => args[Math.floor(Math.random() * args.length)]
export const flatten = arrays => arrays.reduce((acc, row) => [...acc, ...row], [])
export const withoutElement = (array, element) => array.filter(e => e !== element)
export const updateElement = (array, oldElement, newElement) => array.map(e => e === oldElement ? newElement : e)

export const registerListener = (eventName, handler) => {
  window.addEventListener(eventName, handler)
  return () => window.removeEventListener(eventName, handler)
}