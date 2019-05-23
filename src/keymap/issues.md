# Keymap Issues
- Basic key mapping was done primarily in Chrome, on MacBook, on an 'en-GB' keyboard layout.
- Also examined key mapping in Safari, Firefox and Opera browsers on MacBook
- (Testing on Windows/Linux and on other locales not carried out yet. Any feedback welcome!)

## WHAT HAPPENS TO MetaLeft AND MetaRight ON WINDOWS MACHINES?

# Broken Keys

## Chrome
- Tab
- CapsLock
- Function
### Key positions - basic map done from Chrome

## Safari
- Tab
- CapsLock
- Function
### Key positions all same as Chrome, except ~ and ± swapped for some reason!
- These are: Backquote, IntlBackslash

## Firefox
- Tab
- CapsLock
- Function
- Backspace (BACK)
- MetaLeft (APP-L)
- MetaRight (APP-R)
- Slash (. /)
- Quote ('")
- Also Firefox burns a lot of energy! Don't use Firefox!
### Key positions - same as Chrome (those which work)

## Opera
- Tab
- CapsLock
- Function
### Key positions - same as Chrome
- (Conclusion is that Opera might be based on Chrome?! Exactly the same responses.)

## Browser detection
- This has been done separately, see src/browser
- state.browser.type will be one of: Chrome, Safari, Firefox, Opera, Unknown
- Treat Chrome, Opera, Unknown identically
- For Safari, swap two keys
- For Firefox, disable 5 extra keys!

## Key groupings
- Basic key group, same for all browsers
- Chrome

### Set 1
- Tab
- CapsLock
- Function

### Set 2
- Backquote
- IntlBackslash

### Set 3
- Backspace (BACK)
- MetaLeft (APP-L)
- MetaRight (APP-R)
- Slash (. /)
- Quote ('")

### Set 4
- Everything else
