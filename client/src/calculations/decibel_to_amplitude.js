const decibelToAmplitude = (decibelValue) => {

  // +11 dB is amplitude 1
  // +1 dB is amplitude 0.3 (approx)
  // -9 dB is amplitude 0.1
  // -29 dB is amplitude 0.01
  return 10 ** ((decibelValue-11)/20)

}

export default decibelToAmplitude
