import movePressedButtonToTop from "./move_pressed_button_to_top"

const restoreFactorR = 0.08
const restoreFactorExtraR = 0.05
const pxFromPress = 30       // Distributed across all keys, via press

const moveKeys = (state) => {

  for (const key of state.keys) {

    // Deal with forces affecting x and y
    key.location.x += key.force.x
    key.location.y += key.force.y

    // Deal with radius specific factors
    const currentR = key.location.r
    const anchorR = key.anchors.r
    const keyPresses = key.countPresses
    const totalPresses = state.control.totalKeyPresses
    const keyPressFactor = pxFromPress * ( keyPresses / (100 + totalPresses))
    key.location.r -= restoreFactorR * (currentR - (anchorR+keyPressFactor))

    // Deal with extra radius factor - only release when key lifted
    if (key.keyState === 0) {
      key.location.extraR = key.location.extraR ** (1-restoreFactorExtraR)
    }
  }

  movePressedButtonToTop(state)
}

export default moveKeys
