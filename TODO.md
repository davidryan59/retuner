# TO DO LIST

## Stopping note
Currently note is cut off instantly (if sustain not on)
Get it so that note cuts off over say 0.05 seconds - use a Stop Note ADSR

## Page Loading
Some elements on index.html can be slow to load
- Bitcoin stuff
- Possibly Firebase stuff too
- This slows down the page starting up. Run these off a different place after the main app has started.
- Don't run them at all if not connected to the internet

## Page Layout
- Logo takes up too much room.
- Use just the 'R' bit and make it half the height
- Put 'Retuner - a musical instrument where...' to the right
- Use flexbox for layout of these things
- Ideally get it all on the same page
- Add buttons for sharing hosting page via Facebook Twitter etc. (maybe 3 buttons is enough? which are the 3 most popular sites?) - look at Night Out App for how to do this.

## History
- (This has been started, however not quite finished. Record note has been implemented on the key press. This is a slightly tricky feature, and makes me wonder if the earlier things are implemented correctly...)
- Maintain a forwards and backwards history list for instrument notes played.
- If stuff is available in that list, play it on keys Y and U
- If stuff is not available, repeat the same note (without altering frequency)

## Domain
- www.retuner.co.uk and www.retuner.uk have been registered
- Log in, and link them to the Firebase account (will do, however having problems accessing them from abroad)

# Button Radius
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

## Sliders
Implement mouse-controlled and keyboard-controlled sliders for:
- Volume (already on scale of -40dB to +20dB)
- Vividness of colour (0 = greyscale, 10 = psychedelic)
- How big the circles get (0 = no bigger, 10 = x1.5)
- Distance/whitespace between keys (especially affects mouse operation)
- Time range of waveform plot
- Various aspects of the ADSR for play note (and possibly stop note)
- Contrast ratio between keys with simpler notes and more complex notes (see Tenney Height affecting key colour brightness)

## Repeating buttons
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

## Waveform
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

## Internet
- If internet is disconnected, the page breaks (Bitcoin, Firebase)
- Fix this. Make it display gracefully.
- In particular, make it start up fast, and subsequently query external services after important parts of page have loaded.

## Reference section
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

## Testing
- If buttons / keys are a class, can they be tested?
- Going to want some serious user interface testing too.
(Classes and model tests have been removed 17th Nov,
since in ES6 Mocha doesn't seem to work...)

## Right mouse clicks
- Might change right mouse clicks to be press and hold, and a second click for release and hold? Is this a good idea? Alternatively, could hold a key (e.g. either SHIFT) to be like a sustain pedal with mouse clicks?

## Keyboard
- All functions should be accessible by keyboard alone.
- Only obscure functions should require modifiers (or possibly sliders too)
- Might want Shift / Alt / Command to be the same modifier? Esp windows/mac compatibility. Or maybe Shift is one, Alt is another, Ctrl/Command a third.

## Timeout
- Timeout currently set at 10 minutes
- It should probably be around 10 hours, and un-time-out upon pressing Pause again
- In other words, a graphics time out is the same as a Pause
