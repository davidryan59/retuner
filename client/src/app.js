import initialiseState from './initialise_state'
import {keyDownHandler, keyUpHandler} from './controllers/key_handlers'

const runApp = () => {

  // Have a central place where all app state is stored
  const state = {}
  initialiseState(state)

  // Make window respond to key presses
  window.addEventListener('keydown', (event)=>{keyDownHandler(state, event)})
  window.addEventListener('keyup', (event)=>{keyUpHandler(state, event)})

  console.log("The app has started with state", state)
}

window.addEventListener('DOMContentLoaded', runApp)
