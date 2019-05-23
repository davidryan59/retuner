import ADSREnvelope from "adsr-envelope"

// ADSR - see ADSR envelope module
// https://github.com/mohayonao/adsr-envelope/blob/master/README.md

const setSustainAdsrFromSlider = state => {

  const stateWaveform = state.waveform
  const sustainSlider = state.slider.sustain

  const minSustain = 0.3  //s
  const maxSustain = 30   //s
  const ratio = maxSustain / minSustain
  const sustainSliderFraction = sustainSlider.getLinearFraction()
  const secondsToSustain = minSustain * (ratio ** sustainSliderFraction)

  stateWaveform.sustainValue = sustainSlider.getValue()
  stateWaveform.adsrOnPressNote = new ADSREnvelope({
    attackTime: 0.02,
    decayTime: 0.15,
    sustainLevel: 0.70,            // Drop of approx 3dB from peak to sustain
    gateTime: 0.27,                // This is attack + decay + sustain time
    releaseTime: secondsToSustain, // This is total time
    releaseCurve: "exp"
  })

  console.log(`Set ADSR for ${secondsToSustain.toFixed(2)} seconds`)

}

export default setSustainAdsrFromSlider
