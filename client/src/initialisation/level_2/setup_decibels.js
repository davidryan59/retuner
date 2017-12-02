const setupDecibels = (state) => {
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)

  const min = -21
  const step = 2
  const max = 11
  const initial = 1

  state.dB = {}
  const source = state.dB

  source.min = min
  source.step = step
  source.max = max
  source.initial = initial
  source.current = initial
  source.fraction = (initial - min) / (max - min)
  source.updated = true

  console.log(
    "Decibels initialised. Min", min,
    "initially", initial,
    "step", step,
    "max", max
  )
}

export default setupDecibels
