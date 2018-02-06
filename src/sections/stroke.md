# Stroke
strokes the current or given path with the current stroke style

# Stroke Style
```js
ctx.setLineDash([5, 2])
```

# Stroke Shape
```js
ctx.strokeRect(0, 0, width, height)
```

# Stroke Given Path
```js
const path = new Path2D("M10 10 h 80 v 80 h -80 Z")
ctx.stroke(path)
```

# Stroke Current Path
```js
ctx.beginPath()
ctx.rect(0, 0, width, height)
ctx.stroke()
```

```code
  <Canvas draw={(canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0, canvas.width, canvas.height)
    const width = 100
    const height = 100
    ctx.beginPath()
    ctx.setLineDash([5, 2])
    ctx.rect(0, 0, width, height)
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, 2 * Math.PI)
    ctx.stroke()
  })} />
```
