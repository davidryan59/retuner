import keyDowns from './key_downs'
import keyUps from './key_ups'

const keyDownHandler = (state, event) => {
  const keyDownCode = event.code
  const keyDownState = state.input.keyboard[keyDownCode]
  if (keyDownState !== 1 && keyDownState !== 2) {
    // Need the if statement to deal with keys held down
    state.input.keyboard[keyDownCode] = 1
    // Make the code 2 after key press is dealt with
    // This means that if key held down it only gets dealt with once.
    console.log("Key Down", keyDownCode)
  }
  keyDowns(state, keyDownCode)
}

const keyUpHandler = (state, event) => {
  const keyUpCode = event.code
  // No if statement needed, key up only happens once
  state.input.keyboard[keyUpCode] = 0
  console.log("Key Up", keyUpCode)
  keyUps(state, keyUpCode)
}

export {keyDownHandler, keyUpHandler}
