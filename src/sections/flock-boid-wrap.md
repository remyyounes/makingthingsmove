# Wrapping

## Example

Wrap boids across edges

```code
<P5Wrapper
  sketch={p => {
    // parameters
    const dimensions = p.createVector(400, 400)
    const center = dimensions.copy().div(2)
    let flock = []
    const flockCfg = {
      count: 100,
      maxVelocity: 1,
      size: { width: 10, height: 20 },
    }

    class Boid extends Particle {
      constructor(props) {
        super(props)
        this.separation = props.separation
        this.alignment = props.alignment
        this.cohesion = props.cohesion
      }
    }

    const createBoid = ({
      position = center.copy(),
      size = flockCfg.size,
      maxVelocity = flockCfg.maxVelocity,
      velocity = p.createVector(
        p.random(-1, 1),
        p.random(-1, 1)
      ).mult(maxVelocity),
    } = {}) => new Boid({
      size,
      position,
      velocity,
      maxVelocity,
     })

    const renderBoid = Art.boid(p)

    p.setup = function() {
      // setup canvas
      p.createCanvas(dimensions.x, dimensions.y, p.P2D)

      // init boids
      flock = R.times(() => createBoid({ }), flockCfg.count)
    }

    const wrap = dimensions => particle => {
      /* if (particle.position) */
      debugger;
      particle.position.x = particle.position.x % 400
      particle.position.y = particle.position.y % 400

    }
    // update loop / physics
    const update = () => {
      flock.map( boid => boid.update() )
      flock.map( wrap(dimensions) )
    }

    // draw loop / rendering
    p.draw = function() {
      // render background
      p.background(p.color('white'))
      // render flock
      flock.map(renderBoid)
      // update world state
      update()
    }
  }}
/>
```
