import p5 from 'p5'

class Particle {
  constructor(props = {}) {
    this.acceleration = props.acceleration || new p5.Vector(0, 0)
    this.mass = props.mass || 1
    this.position = props.position || new p5.Vector(0, 0)
    this.size = props.size || { width: 10, height: 10 }
    this.velocity = props.velocity || new p5.Vector(0, 0)
    this.maxVelocity = props.maxVelocity || 1
    this.maxForce = props.maxForce || 0.3
    this.friction = props.friction || 1
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    this.velocity.add(this.acceleration).limit(this.maxVelocity)
    this.velocity.mult(this.friction)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }
}

export default Particle
