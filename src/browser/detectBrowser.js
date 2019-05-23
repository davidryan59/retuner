const detectBrowser = state => {

  const userString = window.navigator.userAgent || ""
  let result = "Unknown"

  // .includes() is case sensitive - this is useful here
  
  if (userString.includes("OPR")) {
    result = "Opera"
  } else if (userString.includes("Firefox")) {
    result = "Firefox"
  } else if (userString.includes("Chrome")) {
    result = "Chrome"
  } else if (userString.includes("Safari")) {
    result = "Safari"
  }
  state.browser.type = result
  console.log(`Detected browser is ${result}`)
}

export default detectBrowser
