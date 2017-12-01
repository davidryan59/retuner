import setSlider from "./_set_slider"

const setVolumeDB = (state, newValue) => {

  const sourceObj = state.dB
  const description = "Volume"
  setSlider(state, newValue, sourceObj, description, "dB")

}

export default setVolumeDB
