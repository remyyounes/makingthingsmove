import p5 from 'p5'

const createRuleSlider = (p, key, config) => ({
  active: p.createCheckbox(key, config.active),
  radius: p.createSlider(0, config.radius * 2, config.radius),
  coefficient: p.createSlider(
    0,
    config.coefficient * 2,
    config.coefficient,
    0.0001 // step size
  ),
})

const readSetting = ({ radius, coefficient, active }) => ({
  radius: radius.value(),
  coefficient: coefficient.value(),
  active: active.checked(),
})

class Settings {
  constructor(props) {
    this.rules = props.rules
    this.world = props.world
    this.p = props.p
    this.position = new p5.Vector(20, 0)
    this.initSliders()
  }

  nextPosition() {
    return this.position.add(0, 20).copy()
  }

  update(simulation) {
    this.rules.separation = readSetting(this.controls.separation)
    this.rules.alignment = readSetting(this.controls.alignment)
    this.rules.cohesion = readSetting(this.controls.cohesion)
    this.rules.debug.active = this.controls.debug.checked()
    this.controls.count.html(`count: ${simulation.world.entities.length}`)
  }

  initSliders() {
    this.controls = {
      separation: createRuleSlider(this.p, 'separation', this.rules.separation),
      alignment: createRuleSlider(this.p, 'alignment', this.rules.alignment),
      cohesion: createRuleSlider(this.p, 'cohesion', this.rules.cohesion),
      debug: this.p.createCheckbox('debug', this.rules.debug.active),
      count: this.p.createDiv(`count: ${this.world.entities.length}`),
    }

    this.render([
      this.controls.count,
      this.controls.separation.active,
      this.controls.separation.radius,
      this.controls.separation.coefficient,
      this.controls.alignment.active,
      this.controls.alignment.radius,
      this.controls.alignment.coefficient,
      this.controls.cohesion.active,
      this.controls.cohesion.radius,
      this.controls.cohesion.coefficient,
      this.controls.debug,
    ])
  }

  render(elements) {
    elements.forEach(element => {
      const { x, y } = this.nextPosition()
      element.position(x, y)
    })
  }
}

export default Settings
