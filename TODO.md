# TO DO LIST

## LAUNCH - Check first
- Check every element on the live website works correctly, including
- Image link in top left
- Facebook link
- Twitter link
- https://www.retuner.net opens on a new browser without any certificate errors
- Some instructions are given in the top section about how to use ReTuner
- Beats per minute is available on a slider (shorten the sliders? Make them in 2x2 sections for flex?)
- Give a longer and more impressive demo
- TO LAUNCH:
- Post on my Facebook
- Do a Tweet too!
- Post on my LinkedIn
- Post on various Facebook groups


## Graphical Display of Waveform
- Want a graphical display of the sound output waveform.
- Could have a switch to toggle this on and off
- Had a quick look at this. Basically, it needs an Analyser, which has to sit between notes (all of them, which are playing simultaneously!) and the AudioDestination. Now the AudioDestination acts as an infinite merge, allowing a seemingly unlimited set of audio nodes to merge in at the same time. It would have to be replaced by a merging node with a finite number of inputs, say 30, and these could be cycled and replaced. Then, place the Analyser after the merge, and use that to draw the graph
- The graph would be drawn after clearing the canvas and before drawing the buttons.
- See:
https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode
https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

## Top Quote
- Half the time, have the instrument text.
- At other times, alternate 20 to 50 quotes at random (Andrew's idea!)
- Or, rather than quotes, can have tips.
- Give a half second in between texts where its blank

## Customising keyboard / locales / frequency
- Be able to modify the fraction on each transposing key
- Could open up full customisation of the keyboard
- E.g. any rational number to any keyboard key
- Or a special function from the list
- Would be useful for different locales / keyboard layouts
- Need to be able to save the configuration
- If higher than 7 limit, might want to be able to toggle the RCN notation between variants DR, SAG, (KG1), KG2

## Recording
- Be able to record a sequence of fractions into a new demo
- Be able to remove a recorded demo (but not an original demo)
- (Playback is via the demo system)

## Stereo/Reverb/Delay
Want to output two channels in stereo
Function to add reverb or at least one or two delays
Want individual notes to be played in stereo. Possibly move them around depending on their position on the keyboard. Possibly alter the reverb delays based on how far they are from the 2 edges!

## Recording / Demos
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
- Be able to record note presses into a demo, and add to the demo list
- Be able to name the demo (start with default name)
- Three Blind Mice.

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

## Menu System
- There are a LOT of menu systems out there!
- Pure HTML / CSS can be used
- but also Javascript
- jQuery was often used.
- Pick one and set up some vertical dropdown menus as the top
- Select a keymap, name each one
- Select a demo, name each one
- Editing / renaming etc of any recorded demos
- Editing / renaming of keymaps. User customised keymaps
- Switching on and off things, such as Fraction, RCN on each key
- Potentially switching between different comma algorithms.
- Main point - need to be able to hide and control all of the less important options from some kind of menu.

## Local Storage
- User to be able to read / write local keymaps
- User to be able to read / write local demos
- Can use:
- localStorage.setItem(key, value)
- const value = localStorage.getItem(key)
- Probably ought to save into a base object, e.g. key = retuner
- When its running on the net, this won't matter. But locally, its under 'file://' so it matters.
- These will persist values across multiple user sessions on the same browser
- Can set up an object consisting of everything which should be synchronised with local storage
- User might also want to save/load files to local disk/SSD/HD
- User might also want to share these settings with other users.

## Frame Rate
- Alternate between 60Hz, 30Hz, 20Hz depending on how long frame calculation takes
- Less than 5ms - 60Hz
- 5ms to 12ms - 30Hz
- Otherwise, 20Hz

## Bitcoin
- Does it work if TWO payments are made in a row? to the same address? Worst case scenario, the 2nd person to try and donate sees a message saying 'thank you for your donation'!


## Domain / Sharing
- https://www.retuner.net is now working!
- Check that it goes straight there without a warning, on a new browser? Need this for launch
- Also check the .co.uk .uk .info .online domains are forwarding correctly
- Perhaps external links should open in a new tab? Don't really want people navigating away from the page :)

# Buttons
- Button labels - each row to have its own font size (theres also a default) - redo vertical positioning calc
- Emphasise certain things: keyboard code, 'x 4/3' fraction
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
- This may be important if the high-DPI version (factor=2) is installed
- If note text doesn't fit, hide less important elements (which ones? how?)-
- calculate every statistic of importance
- have a default importance (e.g. 100 for 3/2, 90 for 9/8, etc. Make it related to the stats derived earlier.)
- have a current importance, increasing when button is pressed more
- button radius increases with current importance
- Highlight (brighter colours?) keys with simpler prime vector. E.g. when 3/2 has been pressed, 2/3 will have the most vivid colour, others less so. Can use the Tenney Height of each of the keys to calculate which keys are brighter and less bright.

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

## Accuracy of central frequency
- state.freq.decimalCentreCurrent is decimal, inexact
- state.freq.fractCentre is integer hash, exact
- Every 100 to 10000 key presses, should reset .freq to a value obtained from .fractCentre

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
