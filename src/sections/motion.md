# Moving in space

## Ticking / State
Now that we know how to draw basic shapes we can start animating them.
First we'll need to find a place outside of the render loop for all this state management to take place.

We can create a tick() function to host our world's interactions
```js
tick() {
  // update velocity
  // update position
}
```
We'll then call tick after every render
```js
draw = function() {
  // ...
  ctx.beginPath()
  ctx.rect(0, 0, 10, 10)
  ctx.stroke()
  // ...
  tick()
}
```

## Time delta
For smoother and more linear rendering we should be passing `dt` to our tick function.
(cheat by lag)

## Velocity
Each of our dynamic objects will have a velocity vector that we'll use to compute its next position

We just add the velocity vector to the position vector to get our new position
```js
position = {
  x: position.x + velocity.x,
  y: position.y + velocity.y,
}
```

## Wall bouncing
To simulate bouncing we'll just flip the appropriate velocity axis when we hit a wall

```js
if (position.x > dimensions.width || position.x < 0) {
  velocity = { ...velocity, x: -velocity.x }
} else if (position.y > dimensions.height || position.y < 0) {
  velocity = { ...velocity, y: -velocity.y }
}
```


```code
class CanvasExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dimensions: { width: 500, height: 200 },
      size: { width: 100, height: 100 },
      position: { x: 10, y: 5 },
      velocity: { x: 4, y: -1 }
    }
  }

  tick() {
    const { dimensions, position, size, velocity } = this.state
    const state = { velocity, position }

    if (position.x > dimensions.width || position.x < 0) {
      state.velocity = { ...velocity, x: -velocity.x }
    } else if (position.y > dimensions.height || position.y < 0) {
      state.velocity = { ...velocity, y: -velocity.y }
    }

    state.position = {
      x: position.x + state.velocity.x,
      y: position.y + state.velocity.y,
    }
    this.setState(state)
  }

  render() {
    const { dimensions, position, size } = this.state;
    return (
      <Canvas
        dimensions={dimensions}
        fps={60}
        draw={(canvas => {
          const ctx = canvas.getContext('2d')
          ctx.clearRect(0,0, dimensions.width, dimensions.height)

          ctx.beginPath()
          ctx.ellipse(position.x, position.y, size.width / 2, size.height / 2, 0, 0, 2 * Math.PI)
          ctx.stroke()

          this.tick();
        })}
      />
    )
  }
};

```
