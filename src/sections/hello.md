# Getting started with the canvas

The Canvas
- is a DOM element
- can handle 2D or 3D
- can draw on its context

## Canvas Context

In order to start drawing on a canvas we need to get its context.
The context contains information such as the current alpha, rotation, and scale settings.
It can be used to transform shapes' scale and rotation in relation to their parent (see Fractals).

```js
  const ctx =  canvas.getContext('2d')
  // ... draw ...
  ctx.save(); // enter a new context
  // modify context scale
  // ... draw more ...
  ctx.restore(); // restore the previous context
```

# Drawing
```js
// ===== DRAW =====
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(150,150)
ctx.stroke()
// ================
```


## Line Example

```code
class CanvasExample extends React.Component {

  render() {
    const dimensions = { width: 500, height: 200 }
    const size = { width: 100, height: 100 }
    const position = { x: 200, y: 100 }

    return (
      <Canvas
        dimensions={dimensions}
        draw={(canvas => {

          // extract the contect from canvas
          const ctx = canvas.getContext('2d')

          // clear background before drawing
          ctx.clearRect(0,0, dimensions.width, dimensions.height)

          // ===== DRAW =====
          ctx.beginPath()
          ctx.moveTo(100,100)
          ctx.lineTo(150,150)
          ctx.stroke()
          // ================

        })}
      />
    )
  }
};

```
