import React from 'react'

export default ({ level, unit }) => (
  <text x={unit} y={unit * 2} fontSize={unit} className='level'>LEVEL: {level}</text>
)
