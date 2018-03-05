import p5 from 'p5'

const createRuleSlider = (p, key, config) => ({
  active: p.createCheckbox(key, config.active),
  radius: p.createSlider(0, config.radius * 2, config.radius),
  coefficient: p.createSlider(0, config.coefficient * 2, config.coefficient, 0.0001),
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
    this.initSliders()
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

    this.sliders.separation.active.position(20, 20)
    this.sliders.separation.radius.position(20, 40)
    this.sliders.separation.coefficient.position(20, 60)
    this.sliders.alignment.active.position(20, 80)
    this.sliders.alignment.radius.position(20, 100)
    this.sliders.alignment.coefficient.position(20, 120)
    this.sliders.cohesion.active.position(20, 140)
    this.sliders.cohesion.radius.position(20, 160)
    this.sliders.cohesion.coefficient.position(20, 180)
    this.sliders.debug.position(20, 200)
  }
}

export default Settings
