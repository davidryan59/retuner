import setNumDenom from "../transposing/setNumDenom"
import nextFreqRel from "../transposing/nextFreqRel"
import nextFreqAbsHz from "../transposing/nextFreqAbsHz"
import allowKeyActivation from "../transposing/allowKeyActivation"

import { fillStyleTransposing } from "../graphics/fillStyles"
import { strokeStyleTransposing } from "../graphics/strokeStyles"
import { lineWidthTransposing, lineDashTransposing } from "../graphics/lineWidthsAndDashes"
import { textColourTransposing } from "../graphics/textColours"
import { fontHeightTransposing, fontStyleTransposing } from "../graphics/fontHeightsAndStyles"
import { labelArrayTransposing } from "../graphics/labelArrays"

import {
  instrumentKeyPress, instrumentKeyRelease
} from "../../../controllers/keys/instrumentKeyPressAndRelease"

const setupTransposingKey = (state, key, num, denom) => {
  // Reset two sets of functions on the key
  const keyActivation = key.activation
  keyActivation.allowed = allowKeyActivation
  keyActivation.press = instrumentKeyPress
  keyActivation.release = instrumentKeyRelease
  const keyGraphics = key.graphics
  keyGraphics.getFillStyle = fillStyleTransposing
  keyGraphics.getStrokeStyle = strokeStyleTransposing
  keyGraphics.getLineWidth = lineWidthTransposing
  keyGraphics.getLineDash = lineDashTransposing
  keyGraphics.getTextColour = textColourTransposing
  keyGraphics.getFontHeight = fontHeightTransposing
  keyGraphics.getFontStyle = fontStyleTransposing
  keyGraphics.getLabelArray = labelArrayTransposing

  // Reset the transposing interval numerator and denominator
  key.transposes = {}
  const keyTransposes = key.transposes
  keyTransposes.getNextFreqRel = nextFreqRel
  keyTransposes.getNextFreqAbsHz = nextFreqAbsHz
  keyTransposes.setNumDenom = setNumDenom
  keyTransposes.setNumDenom(state, key, num, denom)
}

export default setupTransposingKey
