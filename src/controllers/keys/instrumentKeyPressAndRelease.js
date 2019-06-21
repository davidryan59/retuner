import keyReleaseEndsNote from "../../calcs/keyReleaseEndsNote"
import keyEndsPreviousPress from "../../calcs/keyEndsPreviousPress"
import { playNoteOnKey, stopNoteOnKey } from "../audio/notePlayAndStop"
import isTransposing from "../../calcs/isTransposing"
import transposeInstrument from "../audio/transposeInstrument"

export const instrumentKeyPress = (state, key) => {
  if (keyEndsPreviousPress(state, key)) stopNoteOnKey(state, key)
  
  if (isTransposing(state, key)) {
    transposeInstrument(state, key)
    playNoteOnKey(state, key)
  } else {
    const freqFactor = key.transposes.ji.ratio()
    playNoteOnKey(state, key, freqFactor)
  }
}

export const instrumentKeyRelease = (state, key) => {
  if (keyReleaseEndsNote(state, key)) stopNoteOnKey(state, key)
}
