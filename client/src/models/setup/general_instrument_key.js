// Each of these are called with (state, key) pair
// when the relevant type of instrument key is pressed
import pauseApp from "../../controllers/keys/pause_app"
import logState from "../../controllers/keys/log_state"
import toggleTransposing from "../../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../../controllers/keys/cycle_sustain_options"
import cycleWaveform from "../../controllers/keys/cycle_waveform"
import resetCentralFreq from "../../controllers/keys/reset_central_freq"
import volumeDecrease from "../../controllers/keys/volume_decrease"
import volumeIncrease from "../../controllers/keys/volume_increase"

const defaultFillStyle = (state, key) => {
  if (key.keyState) {
    return 'rgba(0, 0, 0, 0.7)'
  } else {
    return 'rgba(120, 120, 120, 0.3)'
  }
}

const defaultStrokeStyle = (state, key) => {
  if (key.keyState) {
    return 'rgba(255, 255, 255, 0.6)'
  } else {
    return 'rgba(0, 0, 0, 0.55)'
  }
}

const defaultLineWidth = (state, key) => {
  return 3
}

const setupGeneralInstrumentKey = (state, key, options) => {

  const type = options.type

  key.fillStyle = defaultFillStyle
  key.strokeStyle = defaultStrokeStyle
  key.lineWidth = defaultLineWidth

  // Set key function on pressing
  switch (type) {
    case "log_state":
      key.runOnPress = logState
      break
    case "change_voice":
      key.runOnPress = cycleWaveform
      break
    case "change_sustain_option":
      key.runOnPress = cycleSustainOptions
      break
    case "increase_volume":
      key.runOnPress = volumeIncrease
      break
    case "decrease_volume":
      key.runOnPress = volumeDecrease
      break
    case "reset_central_freq":
      key.runOnPress = resetCentralFreq
      break
    case "change_transposing_option":
      key.runOnPress = toggleTransposing
      break
    case "pause":
      key.runOnPress = pauseApp
      break
    default:
      // console.log(`Key type ${type} not recognised`)
  }

}

export default setupGeneralInstrumentKey
