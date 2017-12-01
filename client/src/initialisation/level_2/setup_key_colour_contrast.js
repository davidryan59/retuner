const setupKeyColourContrast = (state) => {

  const min = 1
  const step = 1
  const max = 11
  const initial = 9

  state.keyColourContrast = {}
  const source = state.keyColourContrast

  source.min = min
  source.step = step
  source.max = max
  source.initial = initial
  source.current = initial
  source.updated = true

  console.log(
    "Key colour contrast initialised. Min", min,
    "initially", initial,
    "step", step,
    "max", max
  )
}

export default setupKeyColourContrast
