import fillStyleDefault from './fill_style_default'

const fillStyleKeymap = (state, key) => {

  const loopNumber = state.control.loopsSinceTimeout
  // Updated each browser frame, approx 50 or 60 times a second

  const remA = loopNumber

  const numA = 4
  const loopA = remA % numA
  const remB = (remA - loopA) / numA

  const numB = 6
  const loopB = remB % numB
  const remC = (remB - loopB) / numB

  const numC = 50
  const loopC = remC % numC

  const repeats = 2

  const complicatedBoolean = ((loopB === 1) && (loopC < repeats))
  // Flash for <numA> frames, <repeats> number of times, <numA*numB> times apart,
  // then wait until <numA*numB*numC> before doing it again!

  return (complicatedBoolean) ? 'rgba(180, 255, 128, 0.8)' : fillStyleDefault(state, key)
}

export default fillStyleKeymap
