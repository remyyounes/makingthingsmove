import p5 from 'p5'

const wrap = dimensions => particle => {
  particle.position.x += particle.position.x < 0 ? dimensions.x : 0
  particle.position.y += particle.position.y < 0 ? dimensions.y : 0
  particle.position.x %= dimensions.x
  particle.position.y %= dimensions.y
}

const isAlive = entity => entity.getHealth() > 0

class World {
  constructor(props) {
    this.entities = props.entities || []
    this.dimensions = props.dimensions
  }

  update() {
    this.entities = this.entities.filter(isAlive)
    this.entities.forEach(wrap(this.dimensions))
  }
}

export default World
