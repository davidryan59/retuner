import getSustainNumericOption from '../../models/sustain/getSustainNumericOption'
import setSustainNumericOption from '../../models/sustain/setSustainNumericOption'

const cycleSustainType = (state, key) => {
  let numericOption = getSustainNumericOption(state, key)
  numericOption = (numericOption + 1 ) % 3
  setSustainNumericOption(state, key, numericOption)
  console.log(`Sustain option cycled to ${numericOption}`)
}

export default cycleSustainType
