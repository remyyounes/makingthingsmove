```code


class MovingParticle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      particle: new Particle({
        position: { x: 100, y: 100 },
        velocity: { x: 1, y: 1 },
        size: { width: 30, height: 30 },
      }),
      dimensions: { width: 400, height: 200}
    }
  }

  checkBounds(bounds, particle) {
    const collision = { x: 0, y: 0 }
    const xMin = particle.position.x - particle.size.width / 2
    const xMax = particle.position.x + particle.size.width / 2
    const yMin = particle.position.y - particle.size.height / 2
    const yMax = particle.position.y + particle.size.height / 2

    if (xMin <= 0 || xMax >= bounds.width) {
      collision.x = 1
    }
    if (yMin <= 0 || yMax >= bounds.height) {
      collision.y = 1
    }
    return collision
  }

  tick() {
    const { dimensions, particle } = this.state

    // check collision
    const collision = this.checkBounds(dimensions, particle)

    // adjust velocity according to collision
    if (collision.x) particle.velocity.x *= -1
    if (collision.y) particle.velocity.y *= -1

    // adjust position according to velocity
    particle.position = {
      x: particle.position.x + particle.velocity.x,
      y: particle.position.y + particle.velocity.y,
    }
    this.setState({ particle })
  }

  render() {
    const { dimensions, particle } = this.state;
    return (
      <Canvas
        dimensions={dimensions}
        fps={60}
        draw={(canvas => {
          const ctx = canvas.getContext('2d')
          ctx.clearRect(0,0, dimensions.width, dimensions.height)

          ctx.beginPath()
          Art.ellipse(ctx, particle)
          ctx.stroke()

          this.tick();
        })}
      />
    )
  }
};

```
