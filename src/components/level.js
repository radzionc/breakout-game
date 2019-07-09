import React from 'react'

export default ({ level, unit }) => (
  <text className='level' x={unit} y={unit * 2} fontSize={unit}>LEVEL: {level}</text>
)