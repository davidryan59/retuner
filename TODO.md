# TO DO LIST

## Key colour contrast
- Vary key background contrast depending on slider (model) value

## Key spacing
- Vary key spacing depending on slider (model) value


## Getting RCN installed in ReTuner
- How to do it?


## Note naming options (for chord only? for this sequencer?)
- Note names using commas
- Whole numbers
- Reciprocal whole numbers
- Fractions with specified note as 1/1

# Buttons
- The relative fraction is very important. Probably display it in larger font as (e.g.) 'x4/3' or 'x 4/3' (can I find the ASCII character for x?)
- Need all button calculations to be installed on buttons as callbacks
- The definitions are currently in the initialise_a_key directory,
- factor them out onto subdirectories, e.g. Key Setup
- Need to model button radius properly.
- Might depend on any or all of these things:
- Basic button size (e.g. 3px)
- +2px for having a function on it
- +2px for being a musical note
- +0px to +5px for having a low complexity AND low prime limit. (Penalise otherwise)
- +2px for being currently pressed
- +0px to +5px for being pressed a lot in button history (maybe anything above 20% is 5px)
- All the above should affect the basic button size.
- The basic button size should push nearby buttons out of the way.
- extra factor for being recently pressed, should not push nearby buttons out of the way

## Page Loading
- Make the app start up fast, and only query external services after important parts of page have loaded.
- Some elements on index.html can be slow to load:
- Facebook / Twitter shares
- Bitcoin stuff
- Possibly Firebase stuff too
- This slows down the page starting up. Run these off a different place after the main app has started.
- Don't run them at all if not connected to the internet

## Browser testing
- Tested in: Mac Safari, Mac Chrome
- Not tested in: (others)

## History
- (This has been started, however not quite finished. Record note has been implemented on the key press. This is a slightly tricky feature, and makes me wonder if the earlier things are implemented correctly...)
- Maintain a forwards and backwards history list for instrument notes played.
- If stuff is available in that list, play it on keys Y and U
- If stuff is not available, repeat the same note (without altering frequency)

## Domain
- Do www.retuner...
- suffixes: .uk .co.uk .net .org
- Make .net the main one
- Log in, and link them to the Firebase account
- Also update the README at this point.

## Voice button
- Its (currently) got 4 states
- Show these states graphically on the button
- Have some accompanying text, e.g. SQ, SAW, SINE, TRI
- Use callbacks

## Sustain button
- Its got 3 states
- Show these states graphically on the button
- Use callbacks

## Transpose button
- Its got 2 states
- Show these states graphically on the button
- Use callbacks

## Pause button
- If app is paused (or timed out) need to highlight this key
- Then user knows to restart the app
- Probably want to draw 1 more animation frame after stopping main loop, so this highlighting is visible.

## Stereo/Reverb/Delay
Want to output two channels in stereo
Function to add reverb or at least one or two delays
Want individual notes to be played in stereo. Possibly move them around depending on their position on the keyboard. Possibly alter the reverb delays based on how far they are from the 2 edges!

## Scoring
Need a new type of score which converts absolute note melody into relative melody.  (A simple way would be to put key name and fraction factor on each note.) Do this for a few simple melodies so people can play something familiar.

## Graphical Display of Waveform
- Want a graphical display of the sound output waveform.

## GitHub
- Feature branches - anyone can do these
- Develop branch - anyone can make a pull request from a feature, only an authorised developer can do the merge
- Master branch - only authorised developers can merge from develop to master
(How to authorise particular developers?)

## Other potential sliders
- Distance/whitespace between keys (especially affects mouse operation)
- Time range of waveform plot
- Various aspects of the ADSR for play note (and possibly stop note)
- Contrast ratio between keys with simpler notes and more complex notes (see Tenney Height affecting key colour brightness)

## Repeating buttons
(This is relevant to the 3 sliders already implemented,
in particular the volume slider which has a keyboard shortcut)
Some buttons (such as volume sliders) want to keep going up or down as they are held down. Need different keyboard handling for this? Might also want to set up a keyboard repeat period which is independent of the operating system repeat period, and happens at a constant rate (rather than with a gap at front)

## Buttons / (Instrument) Keys
- All drawing methods needs to be assigned to the keys themselves.
- Keys need to be assigned a function (if they are not a note)
- Keys which don't work (FN, CAPS LOCK, TAB) should be a different colour, e.g. greyed out
- Keys which have a function should be a darker colour than those which don't.
- Note text needs to be actually centred vertically and horizontally
- Ideally, note text can expand and contract (text resizes) with the radius of the key
- If note text doesn't fit, hide less important elements (which ones? how?)-
- Keys should know what next frequency they represent.
- - This should link directly to the colour they display.
- - It should be capped by the min/max freqs so when you approach the limit
- - all the keys on one side are red (1/1)
- calculate every statistic of importance
- have a default importance (e.g. 100 for 3/2, 90 for 9/8, etc. Make it related to the stats derived earlier.)
- have a current importance, increasing when button is pressed more
- button radius increases with current importance

## Button colours
- Highlight (brighter colours?) keys with simpler prime vector. E.g. when 3/2 has been pressed, 2/3 will have the most vivid colour, others less so. Can use the Tenney Height of each of the keys to calculate which keys are brighter and less bright.

## Primes
App should keep track of all primes on all keys.

## Button text
From most important to least important:
- Full Note Name e.g. C4 (subscript), E'5, Bb[7]2, (use RCN. For 7-limit I think all the comma choice variants DR / SAG / (KG1) / KG2 are equivalent, but use DR variant if in any doubt)
- Keyboard Symbol 'KeyO' (use the full keyboard code to avoid confusion with note names)
- Relative frequency in fraction (e.g. 320 Hz to 256 Hz would display as '5/4')
- Absolute frequency in Hertz '320 Hz'
- Prime factorisation '2^-2 5^1' but using superscripts
- This might be toggled to [-2 0 1] or [-2 0 1 0] if keys are all 5 or 7 limit. Any higher limit, don't allow the toggle.

## Customising keyboard / locales / frequency
- Could open up full customisation of the keyboard
- E.g. any rational number to any keyboard key
- Or possibly only a (7-limit) shortlist of rational numbers
- Would be useful for different locales / keyboard layouts
- Need to be able to save the configuration
- If any integer can be inputted, recalculate set of primes across keyboard
- Might need to switch off toggling to prime exponent vector [2 0... 1] if higher than 7 limit
- If higher than 7 limit, might want to be able to toggle the RCN notation between variants DR, SAG, (KG1), KG2

## Waveform / choice of voices
Add any periodic waves?

## Non-commutative keyboard
(Bug or feature? :)
Think about:
If two notes are pressed at EXACTLY the same time,
the order the event listeners get executed can go either way,
with different results.
Is there any way around this?
Or is this a basic feature of an automatically transposing instrument,
which means it lends itself to melody, instead of harmony
(although harmonic arpeggios are very easy to do)?

## Reference section
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

## Testing
- What to test?
- How to test?
- Whether to turn anything into classes? The obvious choice would be 'instrument key'
- Main problem was that Mocha works on ES5, but not on ES6...

## Right mouse clicks
- Do we want a right mouse click to do anything different to a left mouse click?
- Might change right mouse clicks to be press and hold, and a second click for release and hold? Is this a good idea? Alternatively, could hold a key (e.g. either SHIFT) to be like a sustain pedal with mouse clicks?

## Keyboard
- All functions should be accessible by keyboard alone.
- Only obscure functions should require modifiers (or possibly sliders too)
- Might want Shift / Alt / Command to be the same modifier? Esp windows/mac compatibility. Or maybe Shift is one, Alt is another, Ctrl/Command a third.


------------
PROBABLY DIFFERENT PROJECT FROM HERE...
------------
## Do we want to specify notes using a text language?
- Also look at text languages.
- Some kind of 'Music ML'? Have operations to generate and modify music?
- Specify harmonics in a melody or a chord?
- Transformations to time reverse rhythm, frequencies, or both? Frequency inversion about a centre point?
- Operations to split a note, remove a subnote
- Generally, given a section of music, how to specify its subparts (e.g. for duplication or deletion)? Fractal tree structure?
- Need to be able to translate a section through time, or though frequency (transpose)
- Engraving of scores has been done well elsewhere so don't want to develop a scoring system from scratch, want to patch an existing system.
- Don't know how well these operations sit with the online scoring system I'll need to patch.
