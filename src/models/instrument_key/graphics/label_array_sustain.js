import labelArrayDefault from './label_array_default'
import getSustainTextLabel from '../../sustain/get_sustain_text_label'

const labelArraySustain = (state, key) => {
  const buttonTextArray = labelArrayDefault(state, key)
  const sustainLabel = getSustainTextLabel(state, key)
  buttonTextArray.push(sustainLabel)
  return buttonTextArray
}

export default labelArraySustain
