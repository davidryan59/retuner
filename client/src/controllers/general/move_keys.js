import movePressedButtonToTop from "./move_pressed_button_to_top"

const restoreFactor = 0.01
const restoreFactorR = 0.08
const restoreFactorExtraR = 0.05
const pxFromPress = 30       // Distributed across all keys, via press

const moveKeys = (state) => {

  for (const key of state.keys) {
    // Get
    const currentX = key.location.x
    const currentY = key.location.y
    const currentR = key.location.r
    const anchorX = key.anchors.x
    const anchorY = key.anchors.y
    const anchorR = key.anchors.r
    const keyPresses = key.countPresses
    const totalPresses = state.control.totalKeyPresses
    const keyPressFactor = pxFromPress * ( keyPresses / (100 + totalPresses))
    // Set
    key.location.x -= restoreFactor * (currentX - anchorX)
    key.location.y -= restoreFactor * (currentY - anchorY)
    key.location.r -= restoreFactorR * (currentR - (anchorR+keyPressFactor))
    key.location.extraR = key.location.extraR ** (1-restoreFactorExtraR)
  }

  movePressedButtonToTop(state)
}

export default moveKeys
