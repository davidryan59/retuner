const volumeChange = (state, unitsToIncrease) => 
  state.controller.slider.volume.increaseSliderUnits(unitsToIncrease)

export const volumeDecrease = (state, key) => volumeChange(state, -1)
export const volumeIncrease = (state, key) => volumeChange(state, 1)
