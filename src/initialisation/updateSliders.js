const updateSliders = state => {
  // If sliders have an update, run these once when initialising.
  Object.values(state.slider).forEach(
    slider => (slider.onUpdate) ? slider.onUpdate() : null
  )
}

export default updateSliders
