import changeTopText from '../text/changeTopText'

const topTextHandler = (state, event) => {
  changeTopText(state, event)
  console.log(`Request from user to change top text`)
}

export default topTextHandler
