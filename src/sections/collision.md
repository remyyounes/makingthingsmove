```code
<P5Wrapper sketch={p => {
  // parameters
  const dimensions = { width: 600, height: 600 }
  const size = { width: 40, height: 40 }
  const dragCoefficient = 0.1
  const particles = []
  const count = 200
  let particle

  p.setup = function() {
    // setup canvas
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)
    debugger;
    // setup particles
    for (let i = 0; i < count; i++) {
      const particle = new Particle({
        position: p.createVector(  
          (Math.random() * dimensions.width),
          (Math.random() * dimensions.height)
        ),
        velocity: p.createVector(  
          Math.random() * 2,
          Math.random() * 2
        ),
        size,
      })
      particles.push(particle)
    }
  }



  const checkBounds = (bounds, particle) => {
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

  const resolveOverlap = (ballA, ballB) => {
    const delta = ballB.position.copy().sub(ballA.position)
    const distance = delta.mag()
    var theta = Math.atan2(delta.y, delta.x);
    var overlap = ballA.size.width / 4 + ballB.size.width / 4 - distance;
    ballB.position.x += overlap * Math.cos(theta);
    ballB.position.y += overlap * Math.sin(theta);
  }

  // update loop / physics
  const update = () => {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if ( i !== j ) {
          const ballA = particles[i]
          const ballB = particles[j]
          const delta = ballB.position.copy().sub(ballA.position)
          if ( delta.mag() < size.width/2 ) {
            console.log('collision')
            resolveOverlap(ballA, ballB)
            checkCollision(ballA, ballB)
          }
        }
      }
    }
    particles.map(updateParticle)
  }

  const updateParticle = (particle) => {

    // check collision
    const collision = checkBounds(dimensions, particle)

    // adjust velocity according to collision
    if (collision.x) particle.velocity.x *= -1
    if (collision.y) particle.velocity.y *= -1


    // update particle position and velocity then reset acceleration
    particle.update()
  }

  const checkCollision = (ballA, ballB) => {
    const delta = ballB.position.copy().sub(ballA.position)
    const thetaA = Math.atan2(ballA.velocity.y, ballA.velocity.x);
    const thetaB = Math.atan2(ballB.velocity.y, ballB.velocity.x);
    const phi = Math.atan2(ballB.position.y, ballB.position.x);

    const m1 = ballA.mass;
    const m2 = ballB.mass;
    const v1 = ballA.velocity.mag();
    const v2 = ballB.velocity.mag();

    const dA = thetaA - phi
    const dB = thetaB - phi

    ballA.velocity.x =
      (v1 * Math.cos(dA) * (m1-m2) + 2*m2*v2* Math.cos(dB)) /
      (m1 + m2) * Math.cos(phi) + v1 * Math.sin(dA) * Math.cos(phi + Math.PI/2);
    ballA.velocity.y =
      (v1 * Math.cos(dA) * (m1-m2) + 2*m2*v2* Math.cos(dB)) /
      (m1 + m2) * Math.sin(phi) + v1 * Math.sin(dA) * Math.sin(phi + Math.PI/2);
    ballB.velocity.x =
      (v2 *  Math.cos(dB) * (m2-m1) + 2*m1*v1*Math.cos(dA)) /
      (m1 + m2) * Math.cos(phi) + v2 * Math.sin(dB) * Math.cos(phi + Math.PI/2);
    ballB.velocity.y=
      (v2 *  Math.cos(dB) * (m2-m1) + 2*m1*v1*Math.cos(dA)) /
      (m1 + m2) * Math.sin(phi) + v2 * Math.sin(dB) * Math.sin(phi + Math.PI/2);

}


  // draw loop / rendering
  p.draw = function() {
    // render background
    p.background(p.color('white'))

    // render particle
    p.push()
    particles.map( particle => Art.ellipse(p, particle))
    p.pop()
    update()
  }
}} />

```
