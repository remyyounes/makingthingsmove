# Boids

## Let's get started!

Constitution of a Boid:

* acceleration
* position
* velocity
* maxVelocity
* direction
* separation: { force, radius }
* alignment: { force, radius }
* cohesion: { force, radius }

## Extending Particle

We already have a `Particle` class that handles the motion mechanics.
Let's create a Boid class that extends Particle to add `separation`, `alignment`, and `separation`.

We can derive direction from the velocity vector's `.heading()` method.

```js
particle.velocity.heading()
```

Finally, let's add a `maxVelocity` field to the `Particle` class

```js
// Particle.js
update() {
  this.velocity.add(this.acceleration).limit(this.maxVelocity)
  // ...
}
```

```js
// Boid.js
class Boid extends Particle {
  constructor(props) {
    super(props)
    this.separation = props.separation
    this.alignment = props.alignment
    this.cohesion = props.cohesion
  }
}
```

## Rendering our Boid

Let's extend our Art utility to draw a basic boid

```js
// Art.js
const boid = ctx => particle => {
  // enter a new drawing context to rotate the drawing frame
  ctx.push()
  // move crosshair on top of particle.position
  ctx.translate(particle.position.x, particle.position.y)
  // rotate triangle to point to the direction of velocity
  ctx.rotate(particle.velocity.heading() + Math.PI / 2)
  // draw an upright triangle
  ctx.triangle(
    0,
    -particle.size.height / 2,
    -particle.size.width / 2,
    particle.size.height / 2,
    particle.size.width / 2,
    particle.size.height / 2
  )
  // reset the drawing context to its original state
  ctx.pop()
}
```

## Example

Insert 100 Boids of varying velocities at the middle of the canvas

```code
<P5Wrapper
  sketch={p => {
    // parameters
    const dimensions = p.createVector(400, 400)
    const center = dimensions.copy().div(2)
    let flock = []
    const flockCfg = {
      count: 100,
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
      maxVelocity = 0.1,
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
      flock = R.times(() => createBoid({ maxVelocity: 10}), flockCfg.count)
    }

    // update loop / physics
    const update = () => {
      flock.map( boid => boid.update() )
    }

    // draw loop / rendering
    p.draw = function() {
      // render background
      p.background(p.color('white'))
      flock.map(renderBoid)
      update()
    }
  }}
/>
```
