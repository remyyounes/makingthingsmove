# Wrapping

## Example

Wrap boids across edges

```code
<P5Wrapper
  sketch={p => {
    // parameters
    const dimensions = p.createVector(600, 400)
    const center = dimensions.copy().div(2)
    const settings = new Settings({
      p,
      count: 5,
      world: {
        dimensions,
        center,
        entities: [],
      },
      rules: {
        debug: { active: true },
        separation: { coefficient: 0.002, radius: 40, active: true },
        alignment: { coefficient: 0.002, radius: 60, active: true },
        cohesion: { coefficient: 0.002, radius: 80, active: true },
      }
    })
    const simulation = {
      world: new World(settings.world),
      engine: new Engine(settings.rule),
      settings,
    }


    p.setup = function() {
      // setup canvas
      const { x, y } = settings.world.dimensions
      p.createCanvas(x, y, p.P2D)


      // init boids
      const initBoid = () =>  new Boid({
        p,
        position: simulation.settings.world.center.copy(),
        rules: simulation.settings.rules,
      })
      simulation.world.entities = R.times( initBoid, simulation.settings.count )
    }


    const update = (flock) => {
      flock.forEach( boid => boid.update() )
    }

    const render = (debug, flock) => {
      if (debug.active) {
        flock.map(Art.debugBoid(p))
        flock.map(Art.debugMotion(p))
      }
      flock.map(Art.boid(p))
    }

    // draw loop / rendering
    p.draw = function() {
      const { engine, world, settings } = simulation
      p.background(p.color('white'))
      // get latest input settings
      settings.update()
      // update engine according to settings
      engine.update(world.entities)
      world.update()
      // render world
      render(settings.rules.debug, world.entities)
      // update and flush
      update(world.entities)
    }
  }}
/>
```
