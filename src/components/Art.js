const ellipse = (ctx, particle) => {
  ctx.ellipse(
    particle.position.x,
    particle.position.y,
    particle.size.width / 2,
    particle.size.height / 2,
    0,
    0,
    2 * Math.PI
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

export default {
  ellipse,
  rect,
}
