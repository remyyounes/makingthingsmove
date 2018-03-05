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
    const debug = x => { debugger; return x }
    const flockCfg = {
      count: 20,
      maxVelocity: 1,
      separation: { force: 0.001, radius: 20 },
      alignment: { force: 0.001, radius: 40 },
      cohesion: { force: 0.001, radius: 80 },
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
       const { radius, force } = sliders[key]
       return ({
         radius: radius.value(),
         force: force.value() / FORCE_PRECISION,
       })
    }

    const updateSettings = (settings, sliders) => {
      settings.separation = getSetting('separation', sliders)
      settings.alignment = getSetting('alignment', sliders)
      settings.cohesion = getSetting('cohesion', sliders)
    }

    const renderBoid = Art.boid(p)
    const debugBoid = Art.debugBoid(p)

    const createRuleSlider = (key, config) => ({
      radius: debug(p.createSlider(0, config.radius * 2, config.radius)),
      force: p.createSlider(0, config.force * 2 * FORCE_PRECISION, config.force * FORCE_PRECISION),
    })

    const initSliders = (config) => {
      sliders = {
        separation: createRuleSlider('separation', config.separation),
        alignment: createRuleSlider('alignment', config.alignment),
        cohesion: createRuleSlider('cohesion', config.cohesion),
      }

      sliders.separation.radius.position(20, 20)
      sliders.separation.force.position(20, 50)
      sliders.alignment.radius.position(20, 80)
      sliders.alignment.force.position(20, 110)
      sliders.cohesion.radius.position(20, 140)
      sliders.cohesion.force.position(20, 170)
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

    // update loop / physics
    const update = () => {
      flock.forEach( separate(flock) )
      flock.forEach( wrap(dimensions) )
      flock.forEach( boid => boid.update() )
    }

    // draw loop / rendering
    p.draw = function() {
      // render background
      p.background(p.color('white'))
      // render flock
      flock.map(renderBoid)
      flock.map(debugBoid)
      // update world state
      updateSettings(flockCfg, sliders)
      update()
    }
  }}
/>
```
