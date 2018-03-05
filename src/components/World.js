import p5 from 'p5'

const wrap = dimensions => particle => {
  particle.position.x += particle.position.x < 0 ? dimensions.x : 0
  particle.position.y += particle.position.y < 0 ? dimensions.y : 0
  particle.position.x %= dimensions.x
  particle.position.y %= dimensions.y
}

class World {
  constructor(props) {
    this.entities = []
    this.dimensions = props.dimensions
  }

  update() {
    this.entities.forEach(wrap(this.dimensions))
  }
}

export default World
