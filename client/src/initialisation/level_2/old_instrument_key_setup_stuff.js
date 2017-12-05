// Each of these are called with (state, key) pair
// when the relevant key is pressed
import pauseApp from "../../controllers/keys/pause_app"
import logState from "../../controllers/keys/log_state"
import toggleTransposing from "../../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../../controllers/keys/cycle_sustain_options"
import cycleWaveform from "../../controllers/keys/cycle_waveform"
import resetCentralFreq from "../../controllers/keys/reset_central_freq"
import volumeDecrease from "../../controllers/keys/volume_decrease"
import volumeIncrease from "../../controllers/keys/volume_increase"
import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"
import playPrevNote from "../../controllers/keys/play_prev_note"
import playNextNote from "../../controllers/keys/play_next_note"

const keyDoesNothing = (state, key)=>{
  // console.log("Key does nothing", key)
}
