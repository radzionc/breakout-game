import Vector from './vector'
import { flatten, getRandomFrom } from '../utils'

const PADDLE_AREA = 1 / 3
const BLOCK_HEIGHT = 1 / 3
const PADDLE_HEIGHT = BLOCK_HEIGHT
const BALL_RADIUS = 1 / 5

const LEFT = new Vector(-1, 0)
const RIGHT = new Vector(1, 0)
const UP = new Vector(0, -1)

const LEFT_UP = LEFT.add(UP).normalize()
const RIGHT_UP = RIGHT.add(UP).normalize()

export const getInitialPaddleAndBall = (width, height, paddleWidth) => {
  const paddleY = height - PADDLE_HEIGHT
  const paddle = {
    position: new Vector((width - paddleWidth) / 2, paddleY),
    width: paddleWidth,
    height: PADDLE_HEIGHT
  }
  const ball = {
    center: new Vector(height / 2, paddleY - BALL_RADIUS * 2),
    radius: BALL_RADIUS,
    direction: getRandomFrom(LEFT_UP, RIGHT_UP)
  }

  return {
    paddle,
    ball
  }
}

export const getGameStateFromLevel = ({ lives, paddleWidth, speed, blocks }) => {
  const width = blocks[0].length
  const height = width

  const blocksStart = ((height - height * PADDLE_AREA) - blocks.length * BLOCK_HEIGHT) / 2

  const rowsOfBlocks = blocks.map((row, i) =>
    row.map((density, j) => ({
      density,
      position: new Vector(j, blocksStart + (i * BLOCK_HEIGHT)),
      width: 1,
      height: BLOCK_HEIGHT
    }))
  )

  const size = {
    width,
    height
  }

  return {
    size,
    blocks: flatten(rowsOfBlocks),
    ...getInitialPaddleAndBall(width, height, paddleWidth),
    lives,
    speed
  }
}