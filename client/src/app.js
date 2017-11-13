import initialiseState from './initialisation/initialise_state'
import {keyDownHandler, keyUpHandler} from './controllers/keyboard/key_handlers'

const runApp = () => {
  console.log("The app has started")

  // Have a central place where all app state is stored
  const state = {}
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', (event)=>{keyDownHandler(state, event)})
  window.addEventListener('keyup', (event)=>{keyUpHandler(state, event)})

  console.log("The app is listening for input")
}

window.addEventListener('DOMContentLoaded', runApp)
