const ellipse = (ctx, particle) => {
  ctx.ellipse(
    particle.position.x,
    particle.position.y,
    particle.size.width / 2,
    particle.size.height / 2,
  )
}
const rect = (ctx, particle) => {
  ctx.rect(
    particle.position.x,
    particle.position.y,
    particle.size.width,
    particle.size.height
  )
}

const boid = ctx => boid => {
  ctx.push()
  ctx.translate(boid.position.x, boid.position.y)
  ctx.rotate(boid.velocity.heading() + Math.PI / 2)
  ctx.triangle(
    0,
    -boid.size.height / 2,
    -boid.size.width / 2,
    boid.size.height / 2,
    boid.size.width / 2,
    boid.size.height / 2,
  );
  ctx.pop()
}

const debugBoid = (ctx) => boid => {
  ctx.push()
  ctx.translate(boid.position.x, boid.position.y)
  ctx.canvas.getContext('2d').globalAlpha = 0.05
  ctx.fill("rgba(255, 0, 0, 0.6)")
  ctx.ellipse(0, 0, boid.separation.radius * 2)
  ctx.ellipse(0, 0, boid.alignment.radius * 2)
  ctx.ellipse(0, 0, boid.cohesion.radius * 2)
  ctx.pop()
}

export default {
  boid,
  debugBoid,
  ellipse,
  rect,
}
