# TO DO LIST

## Domain / Sharing
- All links - correct domain when its available
- Facebook link - get the right photo
- Do www.retuner...
- suffixes: .uk .co.uk .net .org
- Make .net the main one
- Log in, and link them to the Firebase account
- Also update the README at this point.
- Perhaps external links should open in a new tab? Don't really want people navigating away from the page :)

## Keymap Bug
- On Safari the ~ and ± keys are switched! This affects the keymap and volume functions...
- ... how to fix reliably?
- Need to test on other browsers too, and PCs...

## Pixel Ratio
- See log function installed on startup. Is it 2 on high DPI and 1 on normal DPI? If so, proceed.
- Retina screen has ratio 2!
- Non-retina screen has ratio 1!
- See new code on setup_graphics_context
- New function getPixelRatio, determined from current browser settings
- See:
- https://github.com/jondavidjohn/hidpi-canvas-polyfill
- https://www.html5rocks.com/en/tutorials/canvas/hidpi/
- Idea is to make canvas width/height larger by getPixelRatio
- And then scale down canvas style width/heigh by same amount
- Result is crisp display on high DPI, without sending unnecessary info in normal DPI.

## Demo
- If keymap is changed in the middle of playing a demo file, errors result. Fix this.
- Load more demos into the default file
- Make demo selection onto what? slider probably not good enough?
- Make the 'beats per minute' onto a Slider! (Might want 2x2 on flex)
- Make a key which twitches each beat (or on/off fill every half beat), changing with slider
- User can record demos
- User can truncate demos to whole number of beats
- User can save demos - to computer as JSON - to online store
- User can load demos from computer or online store
- (Using text editor, user can edit JSON sequenced files)
- Anything else for demo area?

## Physics
- Make sure none of the physics methods work if physics is switched off.
- It would make the key disappear from the screen, but still respond to keyboard.

## Frame Rate
- Alternate between 60Hz, 30Hz, 20Hz depending on how long frame calculation takes
- Less than 5ms - 60Hz
- 5ms to 12ms - 30Hz
- Otherwise, 20Hz

## Alternative Keymaps
- MENU SYSTEM for many things, in particular, selecting (and overwriting) a keymap
- Want to present at least a Simple, Medium and Full keymap to users
- On startup, select a keymap at random from Simple, Medium and Full (could prompt user? can this choice be saved for future sessions?)
- Could do a Pythag, 5-limit, 7-limit and 13-limit keymaps
- Want to be able to select from several keymaps in a list
- If the keymap is updated, want the instrument functions to automatically update live.
- Want user to be able to modify keymap, e.g. to DAVE the keys

## TUNES!
- Translate some popular tunes into ReTuner **key sequences**
- Three Blind Mice. Happy Birthday. etc
- Tune only available if all the right keys are on the keyboard! (If any keys have been retuned, its the retuned fractions which matter... complicated!)
- Have ability to play key sequences over time
- Have ability to play **relative note sequence** over time (these are not the same!)
- Have ability to record either of these too.

## Bitcoin
- Does it work if TWO payments are made in a row? to the same address? Worst case scenario, the 2nd person to try and donate sees a message saying 'thank you for your donation'!

## Switches
- Want to be able to switch on and off the different components of the key
- Essential: Fraction, RCN
- Maybe - other bits

# Buttons
- Button setup is still a bit flaky. Probably ought to have keys which are transposing/playing keys having a separate setup method later.
- The relative fraction is very important. Probably display it in larger font?
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
- Ideally, note text can expand and contract (text resizes) with the radius of the key
- If note text doesn't fit, hide less important elements (which ones? how?)-
- calculate every statistic of importance
- have a default importance (e.g. 100 for 3/2, 90 for 9/8, etc. Make it related to the stats derived earlier.)
- have a current importance, increasing when button is pressed more
- button radius increases with current importance
- Highlight (brighter colours?) keys with simpler prime vector. E.g. when 3/2 has been pressed, 2/3 will have the most vivid colour, others less so. Can use the Tenney Height of each of the keys to calculate which keys are brighter and less bright.

## Graphical Display of Waveform
- Want a graphical display of the sound output waveform.
- Could have a switch to toggle this on and off

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

## RESET button
- Make it brighter! More obvious

## SPACE button
- Since this contains instrument central frequency, try highlighting it
- Try a dotted border?

## Stereo/Reverb/Delay
Want to output two channels in stereo
Function to add reverb or at least one or two delays
Want individual notes to be played in stereo. Possibly move them around depending on their position on the keyboard. Possibly alter the reverb delays based on how far they are from the 2 edges!

## Accuracy of central frequency
- state.freq.decimalCentreCurrent is decimal, inexact
- state.freq.fractCentre is integer hash, exact
- Every 100 to 10000 key presses, should reset .freq to a value obtained from .fractCentre

## Top Quote
- Half the time, have the instrument text.
- At other times, alternate 20 to 50 quotes at random (Andrew's idea!)

## Menu system
- Need to be able to hide and control all of the less important options from some kind of menu.
- How to do this? Don’t want main screen to be too cluttered.

## Scoring
Need a new type of score which converts absolute note melody into relative melody.  (A simple way would be to put key name and fraction factor on each note.) Do this for a few simple melodies so people can play something familiar.

## GitHub
- Feature branches - anyone can do these
- Develop branch - anyone can make a pull request from a feature, only an authorised developer can do the merge
- Master branch - only authorised developers can merge from develop to master
(How to authorise particular developers?)

## Sliders
- Different step size for continuous slider and button operation
- Make all the text generated from the State (e.g. the ‘Volume’ and the ‘-13 dB’)
- Other sliders:
- Reverb
- Number of delays
- Stereo depth…
- Time range of waveform plot
- Various aspects of the ADSR for play note (and possibly stop note)
- Contrast ratio between keys with simpler notes and more complex notes (see Tenney Height affecting key colour brightness)
- …May be 10 to 20 in total. Want to be able to display 3. And swap them in and out. And control them all from the keyboard.

## Slider keyboard handling
- Some buttons (such as volume sliders) want to keep going up or down as they are held down. Need different keyboard handling for this? Might also want to set up a keyboard repeat period which is independent of the operating system repeat period, and happens at a constant rate (rather than with a gap at front)

## Customising keyboard / locales / frequency
- Could open up full customisation of the keyboard
- E.g. any rational number to any keyboard key
- Or a special function from the list
- Would be useful for different locales / keyboard layouts
- Need to be able to save the configuration
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
- Main problem was that Mocha works on ES5, but not on ES6...

## Right mouse clicks
- Do we want a right mouse click to do anything different to a left mouse click?
- Might change right mouse clicks to be press and hold, and a second click for release and hold? Is this a good idea? Alternatively, could hold a key (e.g. either SHIFT) to be like a sustain pedal with mouse clicks?

## Keyboard
- All functions should be accessible by keyboard alone.
- Only obscure functions should require modifiers (or possibly sliders too)
- Might want Shift / Alt / Command to be the same modifier? Esp windows/mac compatibility. Or maybe Shift is one, Alt is another, Ctrl/Command a third.

## Exports
- Allow people to export their live playing by MP3
- Allow people to export the sequence of button presses
- Export and import sequence of button presses - sequencer!!

## UI feedback:
- Struggle to understand the concept.
- Perhaps a short video with what this could do would help?
- Or maybe a demo?
- You could probably program one in.
- Or do one on YouTube!

## History - Abandoned for now
- (This has been started, however not quite finished. Record note was previously implemented on the key press, but has been removed since its not implemented well. This is a slightly tricky feature, and makes me wonder if the earlier things are implemented correctly...)
- Maintain a forwards and backwards history list for instrument notes played.
- If stuff is available in that list, play it on keys Y and U
- If stuff is not available, repeat the same note (without altering frequency)


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
