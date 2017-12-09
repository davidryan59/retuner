const overwriteWithKeymapInfo = (state, keymapFromJson, logInfo) => {

  // Set the function keys
  for (const key of Object.keys(keymapFromJson)) {
    const keyInfo = state.key.mainMap[key]
    if (keyInfo) {
      const instrumentKey = keyInfo.instrumentKey
      if (instrumentKey) {
        const newInfo = keymapFromJson[key]
        if (newInfo) {
          instrumentKey.setup(newInfo)
        }
      }
    }
  }

  const defaultLogInfo = "a keymap"
  console.log(`Loaded ${logInfo || defaultLogInfo}`)

}

export default overwriteWithKeymapInfo
