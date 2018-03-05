import p5 from 'p5'
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

const forces = {
  debug: group => focal => new p5.Vector(0, 0),
  separation: group => focal => average(group.map(getDelta(focal))),
  alignment: group => focal => average(group.map(getVelocity)),
  cohesion: group => focal =>
    getDelta({ position: average(group.map(getPosition)) })(focal).normalize(1),
}

const computeForce = (key, group) => boid =>
  forces[key](group)(boid).mult(boid.rules[key].coefficient)

const updateRule = (flock, boid) => rule => {
  const force = new p5.Vector(0, 0)
  if (boid.rules[rule].active) {
    const group = getNeighbours(flock, boid.rules[rule].radius)(boid)
    return force.add(computeForce(rule, group)(boid))
  }
  return force
}

const updateBoid = flock => boid => {
  const all = Object.keys(forces).map(updateRule(flock, boid))
  const sum = all.reduce((acc, next) => acc.add(next), new p5.Vector(0, 0))
  return boid.applyForce(sum)
}

class Engine {
  update(flock) {
    flock.forEach(updateBoid(flock))
  }
}

export default Engine
