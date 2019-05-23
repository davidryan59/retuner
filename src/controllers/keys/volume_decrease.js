import volumeChange from "../audio/volume_change"

const volumeDecrease = (state, key) => {
  // console.log("Decreasing volume by 1 unit")
  volumeChange(state, -1)
}

export default volumeDecrease
