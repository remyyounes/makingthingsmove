import React from 'react'


class Tree extends React.Component {

  render() {
    return (
      <P5Wrapper sketch={(p) => {
        // parameters
        const dimensions = { width: 600, height: 600 }
        const center = p.createVector(
          dimensions.width / 2,
          dimensions.height / 2,
        )


        p.setup = () => {
          // setup canvas
          p.createCanvas(dimensions.width, dimensions.height, p.P2D)

        }
        const branch = (generation, angle, scale) => {
          // new drawing context
          p.push()
          // apply transformations
          p.rotate(angle)
          p.scale(scale);
          // draw branch
          p.line(0, 0, 0, -this.props.baseLength)
          // draw next generation
          if (generation < this.props.generations) {
            // branch out from the top of the current branch
            p.translate(0, -this.props.baseLength)
            // recurse
            branch(generation + 1, 25 * Math.PI / 180, scale)
            branch(generation + 1,-25 * Math.PI / 180, scale)
          }
          // restore drawing context
          p.pop()
        }

        // draw loop / rendering
        p.draw = () => {

          // render particle
          debugger;
          p.translate(center.x, dimensions.height)
          branch(0, 0, this.props.baseScale)

        }

      }} />
    )
  }
}
Tree.defaultProps = {
  baseLength: 150,
  baseScale: .77,
  generations: 8,
}
export default Tree
