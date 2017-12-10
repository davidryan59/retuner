import labelArrayDefault from './label_array_default'
import getSustainTextLabel from '../../sustain/get_sustain_text_label'

const labelArrayKeymap = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const keymapLabel = state.map.currentName
  buttonTextArray.push(keymapLabel)
  return buttonTextArray
}

export default labelArrayKeymap
