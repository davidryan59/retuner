const randomEffect = 5    // On keyboard scale. 10 is rough distance between keys

const animateInstrumentKey = (state, key) => {

  // Called on any key press,
  // independent of any other function of key

  const keyLocation = key.coords.model.current
  keyLocation.x += randomEffect * (-0.5 + Math.random())
  keyLocation.y += randomEffect * (-0.5 + Math.random())
  keyLocation.extraR *= 1.5

}

export default animateInstrumentKey
