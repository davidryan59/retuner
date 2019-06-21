export const lineWidthDefault = (state, key) => 3


export const lineWidthTransposing = (state, key) => 4 * (2 / key.transposes.ji.ratio())


// Solid line
export const lineDashDefault = (state, key) => []


export const lineDashDashed = (state, key) => {
    const borderWidth = key.graphics.getLineWidth(state, key)
    // Dashed line, M points on, N points off
    // Line Cap = Round, so M points on is larger than expected.
    return [0.5 * borderWidth, 2.5 * borderWidth]
}


export const lineDashTransposing = (state, key) => {
  if (key.transposes.complexityRel < 2.5) {
    // For very simple fractions,
    // such as 1/2, 1/1, 2/1,
    // highlight them with a dashed border
    const borderWidth = key.graphics.getLineWidth(state, key)
    // Dashed line, M points on, N points off
    // Line Cap = Round, so M points on is larger than expected.
    return [borderWidth, 1.5*borderWidth]
  } else {
    return []   // Solid line
  }
}
