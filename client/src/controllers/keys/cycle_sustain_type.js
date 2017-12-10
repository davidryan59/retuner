import getSustainNumericOption from '../../models/sustain/get_sustain_numeric_option'
import setSustainNumericOption from '../../models/sustain/set_sustain_numeric_option'

const cycleSustainType = (state, key) => {
  let numericOption = getSustainNumericOption(state, key)
  numericOption = (numericOption + 1 ) % 3
  setSustainNumericOption(state, key, numericOption)
  `Sustain option cycled to ${numericOption}`
}

export default cycleSustainType
