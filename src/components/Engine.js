import p5 from 'p5'

// =======
//  UTILS
// =======
const debug = x => {
  debugger
  return x
}
const sumVector = (acc, next) => acc.add(next)
const normalize = value => vector => vector.normalize(value)
const average = list => list.reduce(sumVector, new Vector(0, 0))
const getDelta = focal => boid => focal.position.copy().sub(boid.position)
const getPosition = ({ position }) => position
const getVelocity = ({ velocity }) => velocity
const getNeighbours = (flock, radius) => focal =>
  flock.filter(boid => {
    const distance = getDelta(focal)(boid).mag()
    return focal !== boid && distance < radius && distance > 0
  })

const steer = target => focal => {
  const delta = getDelta({ position: target })(focal)
  const distance = delta.mag()
  const threshHold = focal.rules.cohesion.radius / 2
  delta.normalize(1)
  distance < threshHold
    ? delta.mult(focal.maxVelocity * (distance / threshHold))
    : delta.mult(focal.maxVelocity)
  return delta.sub(focal.velocity).limit(focal.maxForce)
}

// ========
//  FORCES
// ========
const forces = {
  debug: group => focal => new p5.Vector(0, 0),
  separation: group => focal =>
    average(
      group.map(boid => {
        const delta = getDelta(focal)(boid)
        const distance = delta.mag()
        return delta.normalize().div(distance)
      })
    ),
  alignment: group => focal =>
    average(group.map(getVelocity)).limit(focal.maxForce),
  cohesion: group => focal => steer(average(group.map(getPosition)))(focal),
}

const computeForce = (key, group) => boid =>
  forces[key](group)(boid).mult(boid.rules[key].coefficient)

const updateRule = (flock, boid) => rule => {
  const force = new p5.Vector(0, 0)
  if (boid.rules[rule].active) {
    const group = getNeighbours(flock, boid.rules[rule].radius)(boid)
    force.add(computeForce(rule, group)(boid))
  }
  return force
}

// =========
//  UPDATES
// =========
const updateBoid = flock => focal => {
  const all = Object.keys(forces).map(updateRule(flock, focal))
  const sum = all.reduce((acc, next) => acc.add(next), new p5.Vector(0, 0))
  focal.applyForce(sum.mult(focal.maxVelocity))
  focal.velocity.normalize(focal.maxVelocity)
}

class Engine {
  update(flock) {
    flock.forEach(updateBoid(flock))
  }
}

export default Engine
