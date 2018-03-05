import p5 from 'p5'
import Particle from './Particle'

const randomVector = (p, magnitudeMax) => p.createVector(
  p.random(-1, 1),
  p.random(-1, 1)
).mult(magnitudeMax)

class Boid extends Particle {
  constructor(props) {
    super(props)
    this.rules = props.rules
    this.p = props.p
    this.velocity = props.velocity || randomVector(this.p, this.maxVelocity)
  }

  get separation() {
    return this.rules.separation
  }
  get alignment() {
    return this.rules.alignment
  }
  get cohesion() {
    return this.rules.cohesion
  }
}

export default Boid
