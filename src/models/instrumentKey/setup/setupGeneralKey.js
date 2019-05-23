import {
  fillStyleDefault, fillStyleInactive, fillStyleSustain, fillStyleKeymap,
  fillStyleTransposeToggle, fillStyleDemoToggle, fillStylePause
} from "../graphics/fillStyles"

import {
  strokeStyleDefault, strokeStyleHighlight, strokeStyleBPM
} from "../graphics/strokeStyles"

import {
  lineWidthDefault, lineDashDefault, lineDashDashed
} from "../graphics/lineWidthsAndDashes"

import { textColourDefault } from "../graphics/textColours"

import {
  fontHeightDefault, fontStyleDefault
} from "../graphics/fontHeightsAndStyles"

import {
  labelArrayDefault, labelArrayVoice, labelArraySustain, labelArrayKeymap,
  labelArrayTransposeToggle, labelArrayDemoToggle, labelArrayPause
} from "../graphics/labelArrays"

import pauseApp from "../../../controllers/keys/pauseApp"
import logState from "../../../controllers/keys/logState"
import toggleTransposing from "../../../controllers/keys/toggleTransposing"
import toggleDemo from "../../../controllers/keys/toggleDemo"
import cycleSustainType from "../../../controllers/keys/cycleSustainType"
import cycleWaveform from "../../../controllers/keys/cycleWaveform"
import cycleKeymap from "../../../controllers/keys/cycleKeymap"
import resetCentralFreq from "../../../controllers/keys/resetCentralFreq"
import { volumeIncrease, volumeDecrease } from "../../../controllers/keys/volumeChanges"
import randomRetune from "../../../controllers/keys/randomRetune"


const isTrue = () => true

const setupGeneralKey = (state, key) => {

  key.transposes = null

  const keyActivation = key.activation
  const keyGraphics = key.graphics

  keyActivation.allowed = isTrue
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
