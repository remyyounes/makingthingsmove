```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 400, height: 250 }
  const center = p.createVector(
    dimensions.width / 2,
    dimensions.height / 2,
  )
  const size = { width: 20, height: 20 }
  const radius = 100
  let particle
  let time = 0

  p.setup = function () {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup particle
    particle = new Particle({ size })
  }

  // update loop / physics
  const update = () => {
    const r = radius + radius  *  0.1 * Math.cos(time * 10)

    // move in around of circle with a dynamic radius
    particle.position.x = center.x + Math.cos(time) * r
    particle.position.y = center.y + Math.sin(time) * r
    time += 0.05
  }

  // draw loop / rendering
  p.draw = function () {

    // render particle
    Art.ellipse(p, particle)

    // update world
    update()
  }

}} />

```
```code
<Oscilation update={
  (time, particle) => {
    const radius = 100
    const r = radius * Math.cos(time * 2)
    particle.position.x = Math.cos(time) * r
    particle.position.y = Math.sin(time) * r
  }
}/>
```
```code
<Oscilation update={
  (time, particle) => {
    const radius = 100
    const r = radius * Math.cos(time / 3)
    particle.position.x = Math.cos(time) * r
    particle.position.y = Math.sin(time) * r
  }
}/>
```
```code
<Oscilation update={
  (time, particle) => {
    const radius = 100
    const r = radius * Math.cos(time / 4)
    particle.position.x = Math.cos(time) * r
    particle.position.y = Math.sin(time) * r
  }
}/>
```
```code
<Oscilation update={
  (time, particle) => {
    const radius = 100
    const r = radius * Math.cos(time / 4)
    particle.position.x = Math.cos(time) * r
    particle.position.y = Math.sin(time/3) * r
  }
}/>
```
```code
<Oscilation update={
  (time, particle) => {
    const radius = 100
    const r = radius
    particle.position.x = Math.cos(time) * r
    particle.position.y = Math.sin(time/4) * r
  }
}/>
```
