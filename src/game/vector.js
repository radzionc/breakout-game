import { toDegrees, toRadians } from '../utils'

export default class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  scaleBy(number) {
    return new Vector(this.x * number, this.y * number);
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

  subtract({ x, y }) {
    return new Vector(this.x - x, this.y - y)
  }

  dotProduct({ x, y }) {
    return this.x * x + this.y * y
  }

  projectOn(other) {
    const amt = this.dotProduct(other) / other.length()
    return new Vector(amt * other.x, amt * other.y)
  }

  reflect(normal) {
    return this.subtract(this.projectOn(normal).scaleBy(2))
  }

  rotate(degrees) {
    const radians = toRadians(degrees)
    const cos = Math.cos(radians)
    const sin = Math.sin(radians)

    return new Vector(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    )
  }

  crossProduct({ x, y }) {
    return this.x * y - x * this.y
  }

  angleBetween(other) {
    return toDegrees(
      Math.atan2(this.crossProduct(other), this.dotProduct(other))
    )
  }
}