import topTexts from "../top_text/top_texts.json"

const setupTopTexts = (state) => {

  state.text.index = 0
  state.text.array = topTexts

  console.log(`Top texts set up. There are ${topTexts.length} of them.`)

}

export default setupTopTexts
