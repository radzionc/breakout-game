export default class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  scaleBy(number) {
    return new Vector(this.x * number, this.y * number)
  }

  length() {
    return Math.hypot(this.x, this.y)
  }

  add({ x, y }) {
    return new Vector(this.x + x, this.y + y)
  }

  normalize() {
    return this.scaleBy(1 / this.length())
  }
}