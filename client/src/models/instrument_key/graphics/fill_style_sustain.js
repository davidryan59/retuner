import fillStyleButton from './fill_style_button'
import getSustainNumericOption from '../../sustain/get_sustain_numeric_option'

const fillStyleSustain = (state, key) => {
  const sustainNumericOption = getSustainNumericOption(state, key)
  if (sustainNumericOption === 0) {
    // Numeric option 0
    // Transposing OFF
    return fillStyleButton(state, key, 1)
  } else if (sustainNumericOption === 1){
    // Numeric option 1
    // Transposing ON* (*except for repeated keys)
    return fillStyleButton(state, key, 0.5)
  } else {
    // Numeric option 2
    // Transposing ON, default
    return fillStyleButton(state, key, 0)
  }
}

export default fillStyleSustain
