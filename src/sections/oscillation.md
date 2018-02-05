```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 400, height: 250 }
  const center = { x: dimensions.width / 2, y: dimensions.height / 2 }
  const size = { width: 20, height: 20 }
  let particleA, particleB, particleC
  const radius = 100
  let time = 0

  p.setup = function () {
    // setup canvas
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup particle
    particleA = new Particle({ size })
    particleB = new Particle({ size })
    particleC = new Particle({ size })
    particleD = new Particle({ size })
  }

  // update loop / physics
  const update = () => {
     particleA.position.x = center.x + Math.cos(time) * radius
    particleA.position.y = center.y + Math.sin(time) * radius 

    particleB.position.x = center.x + Math.cos(time) * radius
    particleB.position.y = center.y

     particleC.position.x = center.x
    particleC.position.y = center.y + Math.sin(time) * radius
    /*
    particleD.position.x = center.x + Math.sin(time) * radius
    particleD.position.y = center.y + Math.sin(time) * radius */
    time += 0.1
  }

  // draw loop / rendering
  p.draw = function () {

    // render background
    p.background(p.color('white'))

    // render particles
    Art.ellipse(p, particleA)
    Art.ellipse(p, particleB)
    Art.ellipse(p, particleC)
    Art.ellipse(p, particleD)
    update()
  }

}} />

```
