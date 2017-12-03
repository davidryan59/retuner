const volumeChange = (state, unitsToIncrease) => {

  const sliderModel = state.slider.volume

  const currentValue = sliderModel.current
  const stepValue = sliderModel.step

  const newValue = currentValue + stepValue * unitsToIncrease

  sliderModel.setCurrent(newValue)

}

export default volumeChange
