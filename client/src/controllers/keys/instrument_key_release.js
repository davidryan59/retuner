import keyReleaseEndsNote from "../audio/key_release_ends_note"
import stopNote from "../audio/stop_note"

const instrumentKeyRelease = (state, key) => {

  // console.log("Releasing", key.keyboardCode)

  if (keyReleaseEndsNote(state, key)) {
    stopNote(state, key)
  }

}

export default instrumentKeyRelease
