class Particle  {
  constructor(props) {
    this.size = props.size ||  { width: 10, height: 10 }
    this.position = props.position ||  { x: 0, y: 0 }
    this.velocity = props.velocity ||  { x: 0, y: 0 }
    this.weight = props.weight ||  1
  }
}

export default Particle
