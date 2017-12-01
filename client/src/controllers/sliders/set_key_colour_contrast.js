import setSlider from "./_set_slider"

const setKeyColourContrast = (state, newValue) => {

  const sourceObj = state.keyColourContrast
  const description = "Key colour contrast"
  setSlider(state, newValue, sourceObj, description)

}

export default setKeyColourContrast
