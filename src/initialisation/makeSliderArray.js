import SliderModel from '../models/SliderModel'

import decibelToAmplitude from "../calcs/decibelToAmplitude"


const makeSliderArray = state => {
  const result = []
  result.push(setupDecibels(state))
  result.push(setupBaseFreq(state))
  result.push(setupBPM(state))
  result.push(setupKeyColourContrast(state))
  result.push(setupKeySpacing(state))
  result.push(setupMaxFreq(state))
  result.push(setupMinFreq(state))
  result.push(setupSustain(state))
  return result
}
export default makeSliderArray


const setupDecibels = state => {  
  const onUpdate = () => {
    // Setup the gain node amplitude target
    const newAmp = decibelToAmplitude(state.slider.volume.getValue())
    const smallDelay = 0.01  //s
    state.mixer.gain.setTargetAtTime(newAmp, state.context.audio.currentTime, smallDelay)
  }
  return new SliderModel({
    id: "volume",
    label: "Volume",
    unit: "dB",
    initial: -6,
    min: -21,
    step: 1,
    max: 11,
    onUpdate
  })
  // SETUP NOTES
  // +11dB, -9dB
  // correspond to amplitudes of
  // 1, 0.1 respectively
  // (Can extend this on a log scale)
}

const setupBaseFreq = state =>
  new SliderModel({
    id: "baseFreq",
    label: "Base",
    unit: "Hz",
    initial: state.param.baseFrequencyHz,
    min: Math.round(state.param.minMinHz),
    max: Math.round(state.param.maxMaxHz),
    logScale: true,
    points: 1 + 240 * Math.log2(state.param.maxMaxHz / state.param.minMinHz)
  })

const setupBPM = state =>
  new SliderModel({
    id: "bpm",
    label: "Speed",
    unit: "bpm",
    initial: state.param.startBPM,
    min: 30,
    max: 500,
    logScale: true,
    points: 99
  })


const setupKeyColourContrast = state =>
  new SliderModel({
    id: "colourContrast",
    label: "Contrast",
    unit: "",
    initial: 10,
    min: -9,
    step: 1,
    max: 11
  })

const setupKeySpacing = state =>
  new SliderModel({
    id: "keySize",
    label: "Size",
    unit: "",
    initial: 10,
    min: 0,
    step: 1,
    max: 11
  })

const setupMaxFreq = state =>
  new SliderModel({
    id: "maxFreq",
    label: "Max",
    unit: "Hz",
    initial: state.param.currentMaxHz,
    min: Math.round(state.param.minMinHz * 2),
    max: Math.round(state.param.maxMaxHz),
    logScale: true,
    points: 1 + 240 * Math.log2(state.param.maxMaxHz / (2 * state.param.minMinHz))
  })

const setupMinFreq = state =>
  new SliderModel({
    id: "minFreq",
    label: "Min",
    unit: "Hz",
    initial: state.param.currentMinHz,
    min: Math.round(state.param.minMinHz),
    max: Math.round(state.param.maxMaxHz / 2),
    logScale: true,
    points: 1 + 240 * Math.log2(state.param.maxMaxHz / (2 * state.param.minMinHz))
  })

const setupSustain = state =>
  new SliderModel({
    id: "sustain",
    label: "Sustain",
    unit: "",
    numLength: 2,
    initial: 6,
    min: 0,
    step: 1,
    max: 11
  })
