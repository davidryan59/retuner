import movePressedButtonToTop from "./move_pressed_button_to_top"

const restoreFactorR = 0.08
const restoreFactorExtraR = 0.05
const pxFromPress = 30       // Distributed across all keys, via press

const moveKeys = (state) => {

  for (const key of state.key.array) {

    // Identify the relevant bits of the state
    const keyAnchor = key.coords.model.anchor
    const keyLocation = key.coords.model.current
    const keyForce = key.coords.model.force

    // Deal with forces affecting x and y
    keyLocation.x += keyForce.x
    keyLocation.y += keyForce.y

    // Deal with radius specific factors
    const currentR = keyLocation.r
    const anchorR = keyAnchor.r
    const keyPresses = key.countActivations
    const totalPresses = state.control.totalKeyActivations
    const keyPressFactor = pxFromPress * ( keyPresses / (100 + totalPresses))
    keyLocation.r -= restoreFactorR * (currentR - (anchorR + keyPressFactor))

    // Deal with extra radius factor - only release when key lifted
    if (key.keyState === 0) {
      keyLocation.extraR = keyLocation.extraR ** (1 - restoreFactorExtraR)
    }
  }

  movePressedButtonToTop(state)
}

export default moveKeys
