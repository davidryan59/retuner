const randomEffect = 3         // On keyboard scale. 10 is rough distance between keys

const animateInstrumentKey = (state, key) => {

  // Called on any key press,
  // independent of any other function of key

  const sizeFraction = state.slider.keySize.getLinearFraction()
  const randomFraction = 0.3 + 0.7 * sizeFraction
  const keyLocation = key.coords.model.current
  keyLocation.x += randomEffect * randomFraction * (-0.5 + Math.random())
  keyLocation.y += randomEffect * randomFraction * (-0.5 + Math.random())
  // keyLocation.extraR *= 1.5
  keyLocation.extraR *= 1.03 + 0.08 * sizeFraction

}

export default animateInstrumentKey
