# Primitive Shapes

Primitives seem boring but sometimes a dot is all you need.
- http://remyyounes.github.io/flock/ (Flocking Simulation)

Primitives are the building blocks for more complex shapes
- http://remyyounes.github.io/ (Snake Game)

## Drawing Path
Before drawing anything, we need to start a new path.
Once we are done drawing we can tell the context to validate the stroke
```js
  /* Drawing sequence */
  ctx.beginPath()  // start
  // ... draw ...
  ctx.stroke() // done

```

## Rectangle
```js
  ctx.rect(
    x,
    y,
    width,
    height,
  );
```

## Line
```js
  ctx.moveTo(x, y)
  ctx.lineTo(x, y)

```

## Ellipse
```js
  ctx.ellipse(
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    anticlockwise
  );
```

## Ellipse Path

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
          const ctx = canvas.getContext('2d')
          ctx.clearRect(0,0, dimensions.width, dimensions.height)

          // ===============
          ctx.beginPath()
          // uncomment moveTo
          // ctx.moveTo(0,100)
          // ctx.lineTo(100,200)
          // ctx.stroke()
          // ctx.beginPath()
          ctx.ellipse(
            position.x,
            position.y,
            size.width / 2,
            size.height / 2,
            0, // rotation
            0, // start angle
            2 * Math.PI // end angle
          )
          ctx.stroke()
          // ===============

        })}
      />
    )
  }
};

```
