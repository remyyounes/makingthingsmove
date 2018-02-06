var Liquid = function(x, y, w, h, c) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.c = c
}

Liquid.prototype.contains = function(m) {
  var l = m.position
  return (
    l.x > this.x &&
    l.x < this.x + this.w &&
    l.y > this.y &&
    l.y < this.y + this.h
  )
}

Liquid.prototype.calculateDrag = function(m) {
  var speed = m.velocity.mag()
  var dragMagnitude = this.c * speed * speed

  // Direction is inverse of velocity
  var dragForce = m.velocity.copy()
  dragForce.mult(-1)
  dragForce.normalize()
  dragForce.mult(dragMagnitude)

  return dragForce
}

Liquid.prototype.display = function(p) {
  p.noStroke()
  p.fill(p.color(0, 126, 255, 102))
  p.rect(this.x, this.y, this.w, this.h)
}

export default Liquid
