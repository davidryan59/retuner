const decibelToAmplitude = (decibelValue) => {

  // +20 dB is amplitude 1
  // 0 dB is amplitude 0.1
  // -20 dB is amplitude 0.01
  // -40 dB is amplitude 0.001
  return 10 ** ((decibelValue-20)/20)

}

export default decibelToAmplitude
