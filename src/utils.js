export const getRange = length => [...Array(length).keys()]
export const getRandomFrom = (...args) => args[Math.floor(Math.random() * args.length)]
export const flatten = arrays => arrays.reduce((acc, row) => [...acc, ...row], [])

export const registerListener = (eventName, handler) => {
  window.addEventListener(eventName, handler)
  return () => window.removeEventListener(eventName, handler)
}