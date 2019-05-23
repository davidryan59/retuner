const volumeChange = (state, unitsToIncrease) => {

  const sliderModel = state.slider.volume
  sliderModel.increaseBySteps(unitsToIncrease)

}

export default volumeChange
