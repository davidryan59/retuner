import setSlider from "./_set_slider"

const setKeySpacing = (state, newValue) => {

  const sourceObj = state.keySpacing
  const description = "Key spacing"
  setSlider(state, newValue, sourceObj, description)

}

export default setKeySpacing
