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

export default {
  ellipse,
  rect,
}
