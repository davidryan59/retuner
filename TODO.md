# TO DO LIST

## Waveform
Want to be able to cycle through at least sawtooth / square / triangle / sine, and maybe add a few periodic waves too. Default to square.

## Amplitudes
Redo in decibels everywhere. Ideally want it to display from 0 to 100 in dB, and most of the time to be around the 80 (default) mark.
Work out max decibels amplitude 1, min decibels lowest that can be heard (and go a bit lower, my speakers not the best)
(If 100 dB is amplitude 1, then 80, 60, 50, 40, 20, 0 dB are 0.1, 0.01, 0.00316, 0.001, 0.0001, 0.00001 respectively.)
Might be best to have a system with dB value from -30dB = 0.00316 to +20dB = 1.00000, with a default value of 0dB = 0.10000
Slider - volume knob - therefore -30 to +20
Can allow sound to distort at high dB, that's OK, its a feature not a bug!

## Notes
Finish implementing the minor 5-limit notes
Also implement a few 2-3-7-limit notes (e.g. 7/4 7/6, 8/7, 9/7 and their inverses)
Might want to hold off on 11/8 and 13/8 since that will make prime vectors too long. But 7-limit should be OK.

## Read up on methods for Context to help me draw better graphics
(Find a link and follow it)

## Envelope / ADSR
Using the plug-in, implement an ADSR.
May need to tweak my start / stop scripts.
Use: https://github.com/mohayonao/adsr-envelope

## Web Audio API
Read about Web Audio API tutorials:
https://modernweb.com/creating-sound-with-the-web-audio-api-and-oscillators/

## Stereo/Reverb/Delay
Function to add reverb or at least one or two delays
Want to output two channels in stereo
Want individual notes to be played in stereo. Possibly move them around depending on their position on the keyboard. Possibly alter the reverb delays based on how far they are from the 2 edges!

## Scoring
Need a new type of score which converts absolute note melody into relative melody.  (A simple way would be to put key name and fraction factor on each note.) Do this for a few simple melodies so people can play something familiar.

## App/Hosting
- App to be hosted on a well known website
- App to be updated frequently, from master branch of Github
- App to be downloadable and playable offline.

## Canvas Resizing
Canvas should resize with the browser window.
Buttons (instrument keys) should resize and pack into the space available.
Button text should get bigger or smaller, with less important items disappearing if too small.

## Graphical Display
- Want a graphical display of the sound output waveform.
- Might want a slider to control how long or short the plotted time range is


## Supporting info on screen
- Name of app (is Retuner the best name? is it already used?)
- Can be a link to hosting page (which should therefore stay on same page, or maybe refresh/restart the page)
- Author name, can be a link to bio elsewhere e.g. LinkedIn
- Version number (start 1.0.0)
- Buttons for sharing hosting page via Facebook Twitter etc. (maybe 3 buttons is enough? which are the 3 most popular sites?)
- GitHub link for app
- Link to the RCN paper

## GitHub
- Make the source code in GitHub publicly accessible
- Make sure master branch is locked down
- Add a develop branch
- Do a few features on branches
- Allow other developers to make push requests to develop

## Sliders
Implement mouse-controlled and keyboard-controlled sliders for:
- Volume
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



## Button Presses
- Should expand a few px when pressed
- Should go back to (nearly) original size when released
- Might want to make this a ripple effect to expand, and a ripple effect to contract after keyup

## Testing
- If buttons / keys are a class, can they be tested?
- Going to want some serious user interface testing too.


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
