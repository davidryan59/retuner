const lineDashDashed = (state, key) => {
    const borderWidth = key.graphics.getLineWidth(state, key)
    // Dashed line, M points on, N points off
    // Line Cap = Round, so M points on is larger than expected.
    return [0.5 * borderWidth, 2.5 * borderWidth]
}

export default lineDashDashed
