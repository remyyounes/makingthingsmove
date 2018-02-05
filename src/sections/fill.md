# Fill in the colors


## Fill style
```js
// transparent fill
ctx.fillStyle = "rgba(0, 0, 255, 0.2)"

// solid fill
ctx.fillStyle = "red"

// transparent even when solid fill
ctx.fillStyle = "red"
ctx.globalAlpha = value;
```

## Applying the filling
```js
ctx.fill()
```
## Fill Style




```code
  <Canvas draw={(canvas => {
    const ctx = canvas.getContext('2d')
    const width = 100
    const height = 100

    ctx.clearRect(0,0, canvas.width, canvas.height)

    // global fill
    // ctx.globalAlpha = 0.5;

    // Square
    ctx.beginPath()
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)"
    ctx.rect(0, 0, width, height)
    ctx.fill()

    // Circle
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.ellipse(
      width / 2, // adjust origin
      height / 2, // adjust origin
      width / 2,
      height / 2,
      0,
      0,
      2 * Math.PI
    )
    ctx.fill()
  })} />
```
