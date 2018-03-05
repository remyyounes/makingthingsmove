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
    this.count = props.count
    this.world = props.world
    this.p = props.p
    this.position = new p5.Vector(20, 0)
    this.initSliders()
  }

  nextPosition() {
    return this.position.add(0, 20).copy()
  }

  update() {
    this.rules.separation = readSetting(this.sliders.separation)
    this.rules.alignment = readSetting(this.sliders.alignment)
    this.rules.cohesion = readSetting(this.sliders.cohesion)
    this.rules.debug.active = this.sliders.debug.checked()
  }

  initSliders() {
    this.sliders = {
      separation: createRuleSlider(this.p, 'separation', this.rules.separation),
      alignment: createRuleSlider(this.p, 'alignment', this.rules.alignment),
      cohesion: createRuleSlider(this.p, 'cohesion', this.rules.cohesion),
      debug: this.p.createCheckbox('debug', this.rules.debug.active),
    }

    this.render([
      this.sliders.separation.active,
      this.sliders.separation.radius,
      this.sliders.separation.coefficient,
      this.sliders.alignment.active,
      this.sliders.alignment.radius,
      this.sliders.alignment.coefficient,
      this.sliders.cohesion.active,
      this.sliders.cohesion.radius,
      this.sliders.cohesion.coefficient,
      this.sliders.debug,
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
