const randomEffect = 5    // On keyboard scale. 10 is rough distance between keys

const animateInstrumentKey = (state, key) => {

  // Called on any key press,
  // independent of any other function of key
  key.location.x += randomEffect * (-0.5 + Math.random())
  key.location.y += randomEffect * (-0.5 + Math.random())
  key.location.extraR *= 1.5

}

export default animateInstrumentKey
