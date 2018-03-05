# Wrapping

## Example

Wrap boids across edges

```code
<P5Wrapper
  sketch={p => {
    // parameters
    const FORCE_PRECISION = 10000
    const dimensions = p.createVector(800, 600)
    const center = dimensions.copy().div(2)
    let sliders, flock = []
    const debug = x => { console.log(x); return x }
    const flockCfg = {
      count: 20,
      maxVelocity: 1,
      separation: { force: 0.001, radius: 20, active: false },
      alignment: { force: 0.01, radius: 40, active: false },
      cohesion: { force: 0.05, radius: 80, active: true },
      size: { width: 10, height: 20 },
    }

    class Boid extends Particle {
      constructor(props) {
        super(props)
        this.rules = props.rules || {}
        this.velocity = props.velocity || randomVector(this.maxVelocity)
      }

      get separation() {
        return this.rules.separation || flockCfg.separation
      }
      get alignment() {
        return this.rules.alignment || flockCfg.alignment
      }
      get cohesion() {
        return this.rules.cohesion || flockCfg.cohesion
      }
    }

    const randomVector = magnitudeMax => p.createVector(
      p.random(-1, 1),
      p.random(-1, 1)
    ).mult(magnitudeMax)


    const getSetting = (key, sliders) => {
       const { radius, force, active } = sliders[key]
       return ({
         radius: radius.value(),
         force: force.value() / FORCE_PRECISION,
         active: active.checked()
       })
    }

    const updateSettings = (settings, sliders) => {
      settings.separation = getSetting('separation', sliders)
      settings.alignment = getSetting('alignment', sliders)
      settings.cohesion = getSetting('cohesion', sliders)
    }

    const renderBoid = Art.boid(p)
    const debugBoid = Art.debugBoid(p)
    const debugMotion = Art.debugMotion(p)

    const createRuleSlider = (key, config) => ({
      active: p.createCheckbox(key, config.active),
      radius: p.createSlider(0, config.radius * 2, config.radius),
      force: p.createSlider(0, config.force * 2 * FORCE_PRECISION, config.force * FORCE_PRECISION),
    })

    const initSliders = (config) => {
      sliders = {
        separation: createRuleSlider('separation', config.separation),
        alignment: createRuleSlider('alignment', config.alignment),
        cohesion: createRuleSlider('cohesion', config.cohesion),
      }

      sliders.separation.active.position(20, 20)
      sliders.separation.radius.position(20, 40)
      sliders.separation.force.position(20, 60)
      sliders.alignment.active.position(20, 80)
      sliders.alignment.radius.position(20, 100)
      sliders.alignment.force.position(20, 120)
      sliders.cohesion.active.position(20, 140)
      sliders.cohesion.radius.position(20, 160)
      sliders.cohesion.force.position(20, 180)
    }

    p.setup = function() {
      // setup canvas
      p.createCanvas(dimensions.x, dimensions.y, p.P2D)


      // init boids
      const initBoid = () =>  new Boid({
        position: center.copy(),
      })

      flock = R.times( initBoid, flockCfg.count )

      // settings
      // create sliders
      initSliders(flockCfg)
    }

    const wrap = dimensions => particle => {
      particle.position.x += particle.position.x < 0 ? dimensions.x : 0
      particle.position.y += particle.position.y < 0 ? dimensions.y : 0
      particle.position.x %= dimensions.x
      particle.position.y %= dimensions.y
    }

    const getNeighbours = (flock, radius) => focal => flock.filter(
      boid => {
        const distance = getPositionOffset(focal)(boid).mag()
        return focal !== boid && distance < radius && distance > 0.01
      }
    )

    const getPositionOffset = boid => target =>
      target.position.copy().sub(boid.position)

    const separate = flock => boid => {
      const radius = boid.separation.radius
      const neighbours = getNeighbours(flock, radius)(boid)
      if (neighbours.length) {
        const deltas = neighbours.map(getPositionOffset(boid))
        const target = deltas.reduce(
          (acc, delta) => delta.add(acc),
          p.createVector(0, 0)
        )

        boid.applyForce(
          target
          .copy()
          .div(neighbours.length)
          .mult(-boid.separation.force)
        )
      }

      return boid
    }

    const align = flock => boid => {
      const radius = boid.alignment.radius
      const neighbours = getNeighbours(flock, radius)(boid)

      if (neighbours.length) {
        const velocities = neighbours.map(x => x.velocity)
        const mean = velocities.reduce(
          (acc, velocity) => acc.add(velocity),
          p.createVector(0, 0)
        )
        const force = mean
          .div(neighbours.length)
          .normalize(1)
          .mult(boid.alignment.force)
        boid.applyForce(force)
      }

      return boid
    }

    const cohere = flock => boid => {
      debugger;
      const radius = boid.cohesion.radius
      const neighbours = getNeighbours(flock, radius)(boid)

      if (neighbours.length) {
        const positions = neighbours.map(x => x.position)
        const mean = positions.reduce(
          (acc, position) => acc.add(position),
          p.createVector(0, 0)
        )
        const force = mean
          .div(neighbours.length)
          .normalize(1)
          .mult(boid.cohesion.force)
        boid.applyForce(force)
      }

      return boid
    }

    // update loop / physics
    const simulate = () => {
      if ( flockCfg.separation.active) flock.forEach( separate(flock) )
      if ( flockCfg.alignment.active) flock.forEach( align(flock) )
      if ( flockCfg.cohesion.active) flock.forEach( cohere(flock) )
      flock.forEach( wrap(dimensions) )
    }

    const update = () => {
      flock.forEach( boid => boid.update() )
    }

    // draw loop / rendering
    p.draw = function() {
      // render background
      p.background(p.color('white'))
      // render flock
      // update world state
      updateSettings(flockCfg, sliders)
      simulate()
      flock.map(Art.debugBoid(p))
      flock.map(Art.debugMotion(p))
      flock.map(Art.boid(p))
      update()
    }
  }}
/>
```
