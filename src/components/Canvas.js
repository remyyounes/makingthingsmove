import React from 'react'

class Canvas extends React.Component {
  componentDidMount() {
    this.initLoop()
  }

  initLoop() {
    clearInterval(this.interval)
    this.interval = setInterval(
      () => this.props.draw(this.canvas),
      1000 / this.props.fps
    )
  }

  render() {
    return (
      <canvas
        width={this.props.dimensions.width}
        height={this.props.dimensions.height}
        ref={node => (this.canvas = node)}
        style={{ background: 'whitesmoke' }}
      />
    )
  }
}
Canvas.defaultProps = {
  fps: 60,
  dimensions: {},
}
export default Canvas
