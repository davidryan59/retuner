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
  keyGraphics.getLineDash = lineDashTransposing
  keyGraphics.getTextColour = textColourTransposing
  keyGraphics.getFontHeight = fontHeightTransposing
  keyGraphics.getFontStyle = fontStyleTransposing
  keyGraphics.getLabelArray = labelArrayTransposing

  // Use this function to change numerator and denominator
  // and update all the dependencies
  keyTransposes.setNumDenom(state, key, num, denom)
}

export default setupTransposingKey
