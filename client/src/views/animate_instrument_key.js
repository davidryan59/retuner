const randomEffect = 5    // On keyboard scale. 10 is rough distance between keys

const animateInstrumentKey = (state, key) => {

  key.location.x += randomEffect * (-0.5 + Math.random())
  key.location.y += randomEffect * (-0.5 + Math.random())
  key.location.r *= 1.5

}

export default animateInstrumentKey
