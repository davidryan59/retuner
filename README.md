- Firebase live app: https://retuner-bdf49.firebaseapp.com/
- GitHub source code: https://github.com/daveryan23/retuner_musical_instrument

# Brief / Scope of Project
Making a new musical instrument in a web browser

# What I did
Made a Javascript web app, hosted by Firebase, which allows the user to
type various keys on their keyboard, and hear different notes coming out
of their speakers. The notes should retune with every key press! This means
that music is played by intervals between subsequent notes, and not by
absolute position / pitch of note.

# Technologies I used
Javascript (ES6)
Babel
ndm
Nodemon
Express
Webpack
Firebase

# Result
Some melodies become a lot easier to play, e.g. arpeggios, since all that is
needed is to repeat the intervals multiple times.
Some things are harder, e.g. keeping track of where a specific pitch is.
Some things are features (definitely not bugs) - e.g. if two notes are played
simultaneously then the two events happen in a random order and one of two
chords is possible. The note order is non-commutative! This instrument is
therefore suited to melody, and not harmony, however quick arpeggios are fine.
