import movePressedButtonToTop from "./move_pressed_button_to_top"

const restoreFactor = 0.01
const restoreFactorR = 0.07

const moveKeys = (state) => {

  for (const key of state.keys) {
    // Get
    const currentX = key.location.x
    const currentY = key.location.y
    const currentR = key.location.r
    const anchorX = key.anchors.x
    const anchorY = key.anchors.y
    const anchorR = key.anchors.r
    // Set
    key.location.x -= restoreFactor * (currentX - anchorX)
    key.location.y -= restoreFactor * (currentY - anchorY)
    key.location.r -= restoreFactorR * (currentR - anchorR)
  }

  movePressedButtonToTop(state)
}

export default moveKeys
