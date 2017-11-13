import keyN from './keydowns/keyN'
import keyV from './keydowns/keyV'
import digit6 from './keydowns/digit6'

const keyDowns = (state, eventKeyboardCode) => {
  if (eventKeyboardCode==="KeyN") {
    keyN(state)
  }
  if (eventKeyboardCode==="KeyV") {
    keyV(state)
  }
  if (eventKeyboardCode==="Digit6") {
    digit6(state)
  }
}

export default keyDowns
