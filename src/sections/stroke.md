```code
  <Canvas draw={(canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0, canvas.width, canvas.height)
    const width = 100;
    const height = 100;
    ctx.beginPath()
    ctx.rect(0, 0, width, height)
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, 2 * Math.PI)
    ctx.stroke()
  })} />
```
