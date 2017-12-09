import fillStyleDefault from "../graphics/fill_style_default"
import strokeStyleDefault from "../graphics/stroke_style_default"
import lineWidthDefault from "../graphics/line_width_default"
import textColourDefault from "../graphics/text_colour_default"
import fontHeightDefault from "../graphics/font_height_default"
import fontStyleDefault from "../graphics/font_style_default"
import labelArrayDefault from "../graphics/label_array_default"

import pauseApp from "../../controllers/keys/pause_app"
import logState from "../../controllers/keys/log_state"
import toggleTransposing from "../../controllers/keys/toggle_transposing"
import cycleSustainOptions from "../../controllers/keys/cycle_sustain_options"
import cycleWaveform from "../../controllers/keys/cycle_waveform"
import resetCentralFreq from "../../controllers/keys/reset_central_freq"
import volumeDecrease from "../../controllers/keys/volume_decrease"
import volumeIncrease from "../../controllers/keys/volume_increase"
import randomRetune from "../../controllers/keys/random_retune"

const functionReturnsTrue = () => true

const setupGeneralKey = (state, key) => {

  key.transposes = null
  
  const keyActivation = key.activation
  const keyGraphics = key.graphics

  keyActivation.allowed = functionReturnsTrue
  keyActivation.press = null   // Overridden below
  keyActivation.release = null

  keyGraphics.getFillStyle = fillStyleDefault
  keyGraphics.getStrokeStyle = strokeStyleDefault
  keyGraphics.getLineWidth = lineWidthDefault
  keyGraphics.getTextColour = textColourDefault
  keyGraphics.getFontHeight = fontHeightDefault
  keyGraphics.getFontStyle = fontStyleDefault
  keyGraphics.getLabelArray = labelArrayDefault

  // Set key function on pressing
  switch (key.type) {
    case "log_state":
      keyActivation.press = logState
      break
    case "change_voice":
      keyActivation.press = cycleWaveform
      break
    case "change_sustain_option":
      keyActivation.press = cycleSustainOptions
      break
    case "increase_volume":
      keyActivation.press = volumeIncrease
      break
    case "decrease_volume":
      keyActivation.press = volumeDecrease
      break
    case "reset_central_freq":
      keyActivation.press = resetCentralFreq
      break
    case "change_transposing_option":
      keyActivation.press = toggleTransposing
      break
    case "random_retune":
      keyActivation.press = randomRetune
      break
    case "pause":
      keyActivation.press = pauseApp
      break
    default:
      // console.log(`Key type ${type} not recognised`)
  }

}

export default setupGeneralKey
