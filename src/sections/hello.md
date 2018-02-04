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
