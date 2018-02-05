import React from 'react'

class Oscilation extends React.Component {

  render() {
    return (
      <P5Wrapper sketch={(p) => {
        // parameters
        const dimensions = { width: 400, height: 250 }
        const center = p.createVector(
          dimensions.width / 2,
          dimensions.height / 2,
        )
        const size = { width: 20, height: 20 }
        let particle
        let time = 0

        p.setup = () => {
          // setup canvas
          const { width, height } = dimensions
          p.createCanvas(dimensions.width, dimensions.height, p.P2D)

          // setup particle
          particle = new Particle({ size })
        }

        const update = () => {
          this.props.update(time, particle)
          particle.position.add(center)
        }
        // draw loop / rendering
        p.draw = () => {

          // render particle
          Art.ellipse(p, particle)

          // update world
          update()
          time += 0.05
        }

      }} />
    )
  }
}

Oscilation.defaultProps = { update: () => {  } }

export default Oscilation
