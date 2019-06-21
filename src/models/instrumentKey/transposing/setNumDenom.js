import { JInterval } from 'ji-rcn'

const setNumDenom = (state, key, inputNum, inputDenom) => {
  
  // Setup transposing key with a new JInterval
  const keyTransposes = key.transposes
  const newJi = new JInterval(inputNum, inputDenom)
  keyTransposes.ji = newJi
  console.log(newJi)
  keyTransposes.complexityRel = newJi.ratioPeo().getBenedettiHeight()
  
  // Make sure the JInterval has a base frequency set
  const instrumentFreq = state.freq.decimalCentreCurrent
  keyTransposes.ji.setStartFreqHz(instrumentFreq)
  
  // IMPROVE: Surely this should go somewhere in the View?
  // Redefine anchor radius of transposing keys in terms of
  // their musical importance, which means low complexity
  const c = 10
  key.coords.model.anchor.r = 5.5 + 2.5 * c * (1 / (c + keyTransposes.complexityRel))
}

export default setNumDenom
