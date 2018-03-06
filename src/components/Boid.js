import p5 from 'p5'
import Particle from './Particle'

const randomVector = (p, magnitudeMax) =>
  p.createVector(p.random(-1, 1), p.random(-1, 1)).mult(magnitudeMax)

class Boid extends Particle {
  constructor(props) {
    super(props)
    this.life = props.life || 100
    this.aging = props.aging || 0.2
    this.rules = props.rules
    this.p = props.p
    this.velocity = props.velocity || randomVector(this.p, this.maxVelocity)
  }

  getHealth() {
    return this.life / 100
  }
}

export default Boid
