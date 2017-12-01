import volumeChange from "../audio/volume_change"

const volumeIncrease = (state, key) => {
  // console.log("Increasing volume by 1 unit")
  volumeChange(state, 1)
}

export default volumeIncrease
