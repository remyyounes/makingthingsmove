# Particle Physics
In order to get started with some physics, let's introduce a simple `Particle` that will hold the necessary data for each of our particles.

```js
class Particle {
  constructor(props = {}) {
    this.acceleration = props.acceleration || new p5.Vector(0, 0)
    this.mass = props.mass || 1
    this.position = props.position || new p5.Vector(0, 0)
    this.size = props.size || { width: 10, height: 10 }
    this.velocity = props.velocity || new p5.Vector(0, 0)
    this.friction = props.friction || 1
  }
  applyForce(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.mult(this.friction)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }
}
```
With `Particle` we can:
- `applyForce` on it in order to change its acceleration
- `update` its position and reset its acceleration

```js
particle.applyForce(new Vector(0.02, 0.04))
particle.update()
```

```code

class MovingParticle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      particle: new Particle({
        position: new Vector(100, 100),
        /* velocity: new Vector(1, 1), */
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
    const radius = particle.size.width / 2

    if (xMin <= 0 || xMax >= bounds.width) {
      particle.velocity.x *= -.9
      particle.position.x = (xMin < 0) ? radius : bounds.width - radius
    }

    if (yMin <= 0 || yMax >= bounds.height) {
      particle.velocity.y *= -.9
      particle.position.y = (yMin < 0) ? radius : bounds.height - radius
    }
  }

  tick() {
    const { dimensions, particle } = this.state

    // apply force
    particle.applyForce(new Vector(0.02, 0.04))

    // check collision
    this.checkBounds(dimensions, particle)

    // adjust position according to velocity
    particle.update()
  }

  render() {
    const { dimensions, particle } = this.state;
    return (
      <Canvas
        dimensions={dimensions}
        fps={60}
        draw={(canvas => {
          const ctx = canvas.getContext('2d')
          ctx.clearRect(0, 0, dimensions.width, dimensions.height)

          ctx.beginPath()
          ctx.ellipse(
            particle.position.x,
            particle.position.y,
            particle.size.width / 2,
            particle.size.height / 2,
            0,
            0,
            2 * Math.PI
          )
          ctx.stroke()

          this.tick();
        })}
      />
    )
  }
};

```
