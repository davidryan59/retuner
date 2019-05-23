# Browser detection
- For a first pass, use **window.navigator.userAgent**
- (Yes I know this can be spoofed! Have you got a better idea, that's future proofed?)
- TESTED ON (MACBOOK)
- Chrome: contains the words `Chrome` AND for some reason `Safari`!
- Safari: contains the word `Safari`
- Firefox: contains the word `Firefox`
- Opera: contains all of: `Chrome`, `Safari`, `OPR`
- TESTED ON (WINDOWS)
- Internet Explorer 8 - Canvas didn't work!
- Chrome - Didn't quite get chance to find out all keys. Looked like the MacBook though.

## Current solution
- Get the string text = window.navigator.userAgent
- text.includes("OPR") - if true, return `Opera`
- text.includes("Firefox") - if true, return `Firefox`
- text.includes("Chrome") - if true, return `Chrome`
- text.includes("Safari") - if true, return `Safari`
- Otherwise return `Unknown`
