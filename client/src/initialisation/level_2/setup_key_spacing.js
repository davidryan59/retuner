const setupKeySpacing = (state) => {

  const min = 0
  const step = 1
  const max = 11
  const initial = 10

  state.keySpacing = {}
  const source = state.keySpacing

  source.min = min
  source.step = step
  source.max = max
  source.initial = initial
  source.current = initial
  source.fraction = (initial - min) / (max - min)
  source.updated = true

  console.log(
    "Key spacing initialised. Min", min,
    "initially", initial,
    "step", step,
    "max", max
  )
}

export default setupKeySpacing
