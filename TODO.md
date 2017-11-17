# TO DO LIST

PUT A LICENCE FILE INTO THE GITHUB!

Bounding Box
- Find out the bounds of all the keys (in their unexpanded states)
- Make sure that this fits within the canvas

Ask an instructor about the GitHub
- if others want to help me develop it, how to go about managing that?
- is the Master branch locked down at all?

All drawing methods needs to be assigned to the keys themselves.
Keys need to be assigned shorter names, which display at the top
Keys need to be assigned a function (if they are not a note)
Keys which have a function should be a darker colour than those which don't.
Note text needs to be actually centred vertically and horizontally
Ideally, note text can expand and contract with the radius of the key
Keys should know what next frequency they represent.
- This should link directly to the colour they display.
- It should be capped by the min/max freqs so when you approach the limit
- all the keys on one side are red (1/1)

Redo the key radiuses based on:
1) Prime limit (lower is bigger), and
2) Tenney height (lower is bigger)

## Stereo/Reverb/Delay
Function to add reverb or at least one or two delays
Want to output two channels in stereo
Want individual notes to be played in stereo. Possibly move them around depending on their position on the keyboard. Possibly alter the reverb delays based on how far they are from the 2 edges!

## Scoring
Need a new type of score which converts absolute note melody into relative melody.  (A simple way would be to put key name and fraction factor on each note.) Do this for a few simple melodies so people can play something familiar.

## Canvas Resizing
Canvas should resize with the browser window.
Buttons (instrument keys) should resize and pack into the space available.
Button text should get bigger or smaller, with less important items disappearing if too small.

## Graphical Display
- Want a graphical display of the sound output waveform.
- Might want a slider to control how long or short the plotted time range is

## Stopping note
Currently note is cut off instantly (if sustain not on)
Get it so that note cuts off over say 0.05 seconds

## GitHub
- Make the source code in GitHub publicly accessible
- Make sure master branch is locked down
- Add a develop branch
- Do a few features on branches
- Allow other developers to make push requests to develop

## Sliders
Implement mouse-controlled and keyboard-controlled sliders for:
- Volume (already on scale of -40dB to +20dB)
- Vividness of colour (0 = greyscale, 10 = psychedelic)
- How big the circles get (0 = no bigger, 10 = x1.5)
- Time range of waveform plot
- Distance between keys (especially affects mouse operation)

## Repeating buttons
Some buttons (such as volume sliders) want to keep going up or down as they are held down. Need different keyboard handling for this? Might also want to set up a keyboard repeat period which is independent of the operating system repeat period, and happens at a constant rate (rather than with a gap at front)

## Buttons / (Instrument) Keys
- Should InstrumentKey be a class / model?
- Every button on the computer keyboard should be represented, except function key row. Each button should have an anchor position of its approximate place on a normal-ish keyboard. Buttons that won't respond (Fn / Caps Lock / Tab) should be greyed out. Any button which is different between Mac and PC should not be usable.
- Is there one class (yes!) or many classes? (Use one class, use composition / callbacks for varying behaviour.)
Each key should:
- be graphically represented as a round button (round for now, collision detection much easier!)
- calculate every statistic of importance
- have a default importance (e.g. 100 for 3/2, 90 for 9/8, etc. Make it related to the stats derived earlier.)
- count how many times its been pressed this session
- have a current importance, increasing when button is pressed more
- button radius increases with current importance
- button is pressed upon by surrounding buttons and moves correspondingly
- button has a restoring force equal to (possibly the square of) the distance from anchor point, so it never goes too far.
- Buttons can't go off-canvas - large force
- Buttons should have 3 to 5 pixels between keys, which might be produced by the force.
- Extension - have pixels / whitespace between buttons modifiable by a slider


## Button highlighting and colouring
- Highlight when pressed, maybe border getting wider, background color darkening
- Highlight when closer to base frequency so user can see this and navigate back. This can be done via Tenney height of fraction.
- Rainbow coloured depending on where in octave: maybe red 1/1 green 4/3 blue 3/2 red 2/1. (Probably want to set 7 different points in octave for 6 colours. Make sure that 4/3, 3/2 have decently strong colours)

## Canvas properties
- Canvas walls are solid (read: large force on buttons). Canvas is bounding box for keys providing compression.
- Canvas to be responsive to left mouse clicks and releases for press and release
- Canvas to be responsive to right mouse click for press and hold, release and hold.

## Keyboard
- All function should be accessible by keyboard alone.
- Only obscure functions should require modifiers
- Might want Shift / Alt / Command to be the same modifier? Esp windows/mac compatibility. Or maybe Shift is one, Alt is another, Ctrl/Command a third.


## Primes
App should keep track of all primes on all keys.

## ADSR
- Its set up in the waveform initialisation
- Its set up in playNote function
- But these are completely disconnected!
- Set up properly. Probably a new ADSR envelope for each new note
- Also might want to put a few aspects of ADSR on sliders.

## Button Presses
- Should expand a few px when pressed
- Should go back to (nearly) original size when released
- Might want to make this a ripple effect to expand, and a ripple effect to contract after keyup


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

## X
Currently using 'x' for HTML elements to substitute
Is there a more official tag for 'general tag'?

## Links to social media
- Buttons for sharing hosting page via Facebook Twitter etc. (maybe 3 buttons is enough? which are the 3 most popular sites?)

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
