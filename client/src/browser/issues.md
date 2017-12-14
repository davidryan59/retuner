# Browser detection
- For a first pass, use **window.navigator.userAgent**
- (Yes I know this can be spoofed! Have you got a better idea, that's future proofed?)
- Chrome: contains the words `Chrome` AND for some reason `Safari`!
- Safari: contains the word `Safari`
- Firefox: contains the word `Firefox`
- Opera: contains all of: `Chrome`, `Safari`, `OPR`

## Current solution
- Get the string text = window.navigator.userAgent
- text.includes("OPR") - if true, return `Opera`
- text.includes("Firefox") - if true, return `Firefox`
- text.includes("Chrome") - if true, return `Chrome`
- text.includes("Safari") - if true, return `Safari`
- Otherwise return `Unknown`
