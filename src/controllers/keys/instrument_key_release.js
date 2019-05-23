import keyReleaseEndsNote from "../../calculations/key_release_ends_note"
import stopNote from "../audio/stop_note"

const instrumentKeyRelease = (state, key) => {
  if (keyReleaseEndsNote(state, key)) stopNote(state, key)
}

export default instrumentKeyRelease
