import keyS from './keyups/keyS'

const keyUps = (state, eventKeyboardCode) => {
  if (eventKeyboardCode==="KeyS") {
    keyS(state)
  }
}

export default keyUps
