import React from 'react'

import { getRange } from '../utils'

export default ({ lives, containerWidth, unit }) => {
  const width = unit * 2
  return getRange(lives).map(i => (
    <rect
      className='life'
      rx={unit / 4}
      height={unit}
      width={width}
      y={unit}
      x={containerWidth - unit - width * (i + 1) - (unit / 2) * i}
      key={i}
    />
  ))
}