import changeTopText from '../top_text/change_top_text'

const topTextHandler = (state, event) => {
  changeTopText(state, event)
  console.log(`Request from user to change top text`)
}

export default topTextHandler
