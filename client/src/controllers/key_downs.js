import keyN from './keydowns/keyN'

const keyDowns = (state, eventKeyboardCode) => {
  if (eventKeyboardCode==="KeyN") {
    keyN(state)
  }
}

export default keyDowns
