const playNote = (state, freqFactor=1) => {
  const theFreq = state.freqs.oscFreq * freqFactor
  console.log("Playing note at", Math.round(theFreq*100)/100, "Hz")

  // Implement note playing here

}

export default playNote
