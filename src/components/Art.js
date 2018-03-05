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

const boid = ctx => particle => {
  ctx.push()
  ctx.translate(particle.position.x, particle.position.y)
  ctx.rotate(particle.velocity.heading() + Math.PI / 2)
  ctx.triangle(
    0,
    -particle.size.height / 2,
    -particle.size.width / 2,
    particle.size.height / 2,
    particle.size.width / 2,
    particle.size.height / 2,
  );
  ctx.pop()
}

export default {
  boid,
  ellipse,
  rect,
}
