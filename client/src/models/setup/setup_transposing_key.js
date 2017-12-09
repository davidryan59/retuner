import setNumDenom from "../transposing/set_num_denom"
import nextFreqRel from "../transposing/next_freq_rel"
import nextFreqAbsHz from "../transposing/next_freq_abs_hz"

import allowKeyActivation from "../transposing/allow_key_activation"
import instrumentKeyPress from "../../controllers/keys/instrument_key_press"
import instrumentKeyRelease from "../../controllers/keys/instrument_key_release"

import fillStyleTransposing from "../graphics/fill_style_transposing"
import strokeStyleTransposing from "../graphics/stroke_style_transposing"
import lineWidthTransposing from "../graphics/line_width_transposing"
import textColourTransposing from "../graphics/text_colour_transposing"
import fontHeightTransposing from "../graphics/font_height_transposing"
import fontStyleTransposing from "../graphics/font_style_transposing"
import labelArrayTransposing from "../graphics/label_array_transposing"

const setupTransposingKey = (state, key, num, denom) => {

  key.transposes = {}

  const keyTransposes = key.transposes
  const keyActivation = key.activation
  const keyGraphics = key.graphics

  keyTransposes.setNumDenom = setNumDenom
  keyTransposes.getNextFreqRel = nextFreqRel
  keyTransposes.getNextFreqAbsHz = nextFreqAbsHz

  keyActivation.allowed = allowKeyActivation
  keyActivation.press = instrumentKeyPress
  keyActivation.release = instrumentKeyRelease

  keyGraphics.getFillStyle = fillStyleTransposing
  keyGraphics.getStrokeStyle = strokeStyleTransposing
  keyGraphics.getLineWidth = lineWidthTransposing
  keyGraphics.getTextColour = textColourTransposing
  keyGraphics.getFontHeight = fontHeightTransposing
  keyGraphics.getFontStyle = fontStyleTransposing
  keyGraphics.getLabelArray = labelArrayTransposing

  // Use this function to change numerator and denominator
  // and update all the dependencies
  keyTransposes.setNumDenom(state, key, num, denom)
}

export default setupTransposingKey
