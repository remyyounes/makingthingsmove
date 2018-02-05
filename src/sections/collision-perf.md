```code
<P5Wrapper sketch={p => {
  // parameters
  const dimensions = { width: 600, height: 600 }
  const size = { width: 40, height: 40 }
  const dragCoefficient = 0.1
  const particles = []
  const count = 600
  let quadrants
  let particle

  p.setup = function() {
    p.disableFriendlyErrors = true
    // setup canvas
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup quadrants
    const width = dimensions.width / 2
    const height = dimensions.height / 2
    const q = { x: 0, y: 0, width: dimensions.width, height: dimensions.height }
    const q1 = { x: width, y: 0, width, height }
    const q2 = { x: width, y: height, width, height }
    const q3 = { x: 0, y: height, width, height }
    const q4 = { x: 0, y: 0, width, height }
    quadrants = [q1, q2, q3, q4]
    /* quadrants = [q] */

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
    const radius = particle.size.width / 2
    const xMin = particle.position.x - radius
    const xMax = particle.position.x + radius
    const yMin = particle.position.y - radius
    const yMax = particle.position.y + radius

    if (xMin <= 0 || xMax >= bounds.width) {
      collision.x = 1
    }
    if (yMin <= 0 || yMax >= bounds.height) {
      collision.y = 1
    }
    return collision
  }

  const contains = (bounds, particle) => {
    const collision = { x: 0, y: 0 }
    const radius = particle.size.width / 2
    const xMin = particle.position.x - radius
    const xMax = particle.position.x + radius
    const yMin = particle.position.y - radius
    const yMax = particle.position.y + radius

    const containsHorizontally = xMin >= bounds.x && xMax <= bounds.width + bounds.x
    const containsVertically = yMin >= bounds.y && yMax <= bounds.height + bounds.y


    return containsHorizontally && containsVertically
  }

  const resolveOverlap = (ballA, ballB) => {
    const delta = ballB.position.copy().sub(ballA.position)
    const distance = delta.mag()
    var theta = Math.atan2(delta.y, delta.x);
    var overlap = ballA.size.width / 4 + ballB.size.width / 4 - distance;
    ballB.position.x += overlap * Math.cos(theta);
    ballB.position.y += overlap * Math.sin(theta);
  }

  const groupByQuadrant = () => {
    return quadrants.map( quadrant =>
      particles.filter( particle => contains(quadrant, particle) )
    )
  }

  // update loop / physics
  const update = () => {
    const groups = groupByQuadrant()
    console.log('groups', groups)
    groups.map(updateGroupCollisions)
    particles.map(updateParticle)
  }
  const updateGroupCollisions = balls => {
    console.log('g', balls.length)
    const num = balls.length
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        if ( i !== j ) {
          const ballA = balls[i]
          const ballB = balls[j]
          const delta = ballB.position.copy().sub(ballA.position)
          if ( delta.mag() < size.width/2 ) {
            resolveOverlap(ballA, ballB)
            checkCollision(ballA, ballB)
          }
        }
      }
    }
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
    /* p.push() */
    particles.map( particle => Art.ellipse(p, particle))
    /* p.pop() */
    update()
  }
}} />

```
