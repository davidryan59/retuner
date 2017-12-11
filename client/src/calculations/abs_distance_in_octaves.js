const absDistanceInOctaves = (key, fraction) => {
  if (key.transposes) {
    const keyRelFraction = key.transposes.decimalRel
    return Math.abs(Math.log2(keyRelFraction/fraction))
  } else {
    return 10e12
  }
}

export default absDistanceInOctaves
