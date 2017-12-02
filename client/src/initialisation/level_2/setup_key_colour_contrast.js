const setupKeyColourContrast = (state) => {

  const min = -9
  const step = 1
  const max = 11
  const initial = 10

  state.keyColourContrast = {}
  const source = state.keyColourContrast

  source.min = min
  source.step = step
  source.max = max
  source.initial = initial
  source.current = initial
  source.fraction = (initial - min) / (max - min)
  source.updated = true

  console.log(
    "Key colour contrast initialised. Min", min,
    "initially", initial,
    "step", step,
    "max", max
  )
}

export default setupKeyColourContrast
