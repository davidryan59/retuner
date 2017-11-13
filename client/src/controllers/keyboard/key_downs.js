import spaceKey from './keydowns/space_key'
import digit6 from './keydowns/digit6'
import keyN from './keydowns/keyN'
import keyV from './keydowns/keyV'

const keyDowns = (state, eventKeyboardCode) => {
  if (eventKeyboardCode==="Space") {
    spaceKey(state)
  }
  if (eventKeyboardCode==="Digit6") {
    digit6(state)
  }
  if (eventKeyboardCode==="KeyN") {
    keyN(state)
  }
  if (eventKeyboardCode==="KeyV") {
    keyV(state)
  }
}

export default keyDowns
