import fillStyleDefault from "../graphics/fill_style_default"
import fillStyleInactive from "../graphics/fill_style_inactive"
import fillStyleSustain from "../graphics/fill_style_sustain"
import fillStyleKeymap from "../graphics/fill_style_keymap"
import fillStyleTransposeToggle from "../graphics/fill_style_transpose_toggle"
import fillStyleDemoToggle from "../graphics/fill_style_demo_toggle"
import fillStylePause from "../graphics/fill_style_pause"
import strokeStyleDefault from "../graphics/stroke_style_default"
import strokeStyleHighlight from "../graphics/stroke_style_highlight"
import strokeStyleBPM from "../graphics/stroke_style_bpm"
import lineWidthDefault from "../graphics/line_width_default"
import lineDashDefault from "../graphics/line_dash_default"
import lineDashDashed from "../graphics/line_dash_dashed"
import textColourDefault from "../graphics/text_colour_default"
import fontHeightDefault from "../graphics/font_height_default"
import fontStyleDefault from "../graphics/font_style_default"
import labelArrayDefault from "../graphics/label_array_default"
import labelArrayVoice from "../graphics/label_array_voice"
import labelArraySustain from "../graphics/label_array_sustain"
import labelArrayKeymap from "../graphics/label_array_keymap"
import labelArrayTransposeToggle from "../graphics/label_array_transpose_toggle"
import labelArrayDemoToggle from "../graphics/label_array_demo_toggle"
import labelArrayPause from "../graphics/label_array_pause"

import pauseApp from "../../../controllers/keys/pause_app"
import logState from "../../../controllers/keys/log_state"
import toggleTransposing from "../../../controllers/keys/toggle_transposing"
import toggleDemo from "../../../controllers/keys/toggle_demo"
import cycleSustainType from "../../../controllers/keys/cycle_sustain_type"
import cycleWaveform from "../../../controllers/keys/cycle_waveform"
import cycleKeymap from "../../../controllers/keys/cycle_keymap"
import resetCentralFreq from "../../../controllers/keys/reset_central_freq"
import volumeDecrease from "../../../controllers/keys/volume_decrease"
import volumeIncrease from "../../../controllers/keys/volume_increase"
import randomRetune from "../../../controllers/keys/random_retune"

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
  keyGraphics.getLineDash = lineDashDefault
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
      keyGraphics.getLabelArray = labelArrayVoice
      break
    case "change_sustain_option":
      keyActivation.press = cycleSustainType
      keyGraphics.getFillStyle = fillStyleSustain
      keyGraphics.getLabelArray = labelArraySustain
      break
    case "change_keymap_option":
      keyActivation.press = cycleKeymap
      keyGraphics.getFillStyle = fillStyleKeymap
      keyGraphics.getLabelArray = labelArrayKeymap
      break
    case "increase_volume":
      keyActivation.press = volumeIncrease
      break
    case "decrease_volume":
      keyActivation.press = volumeDecrease
      break
    case "reset_central_freq":
      keyActivation.press = resetCentralFreq
      keyGraphics.getStrokeStyle = strokeStyleHighlight
      break
    case "change_transposing_option":
      keyActivation.press = toggleTransposing
      keyGraphics.getFillStyle = fillStyleTransposeToggle
      keyGraphics.getLabelArray = labelArrayTransposeToggle
      break
    case "change_demo_option":
      keyActivation.press = toggleDemo
      keyGraphics.getStrokeStyle = strokeStyleBPM
      keyGraphics.getFillStyle = fillStyleDemoToggle
      keyGraphics.getLabelArray = labelArrayDemoToggle
      break
    case "random_retune":
      keyActivation.press = randomRetune
      break
    case "pause":
      keyActivation.press = pauseApp
      keyGraphics.getLineDash = lineDashDashed
      keyGraphics.getStrokeStyle = strokeStyleHighlight
      keyGraphics.getFillStyle = fillStylePause
      keyGraphics.getLabelArray = labelArrayPause
      break
    case "not_used":
      keyGraphics.getFillStyle = fillStyleInactive
      break
    case "trapping_key_fails":
      keyGraphics.getFillStyle = fillStyleInactive
      break
    default:
      // console.log(`Key type ${type} not recognised`)
  }

}

export default setupGeneralKey
