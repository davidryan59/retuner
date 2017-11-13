// ALL OF THIS STUFF NEEDS TO BE MOVED INTO
// OTHER PLACES, SUCH AS FUNCTIONS CALLED FROM
// APP INITIALISATION, OR PLAYING THE NOTE


// // THIS HAS ALL MOVED TO THE 'play note' METHOD...
// // Create an oscillator node and gain node
// const oscillator = state.audioContext.createOscillator();
// const gainNode = state.audioContext.createGain();
// // Specify the oscillator type from state
// oscillator.type = state.waveform.type
// // Specify the oscillator frequency
// // oscillator.frequency.setValueAtTime(state.freqs.originalFreq, state.audioContext.currentTime)  // Alternative way
// oscillator.frequency.setValue(state.freqs.oscFreq)
// // Setup the gain node amplitude
// gainNode.gain.value = state.amps.initialAmp
// // Connect the nodes to the audio context
// oscillator.connect(gainNode)
// gainNode.connect(state.audioContext.destination)
// // Play the note for 1 second
// oscillator.start(0.00)
// oscillator.stop(1.00)
// oscillator.onended = function() {
//   console.log("Note finished")
// }

// var delayNode = state.audioContext.createDelay(5.0);

// connect oscillator to gain node to speakers

// Without delay
//
// // With delay
// oscillator.connect(delayNode);
// delayNode.connect(gainNode);
// gainNode.connect(state.audioContext.destination);
// delayNode.delayTime.value = 3.0;

// create initial theremin frequency and volumn values

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var minFreq = 120
var maxFreq = 600;
var freqFactor = maxFreq/minFreq
var volFactor = maxAmp/minAmp


// set options for the oscillator

oscillator.start(0)
oscillator.stop(1)
oscillator.onended = function() {
  console.log("Note finished")
}


// Mouse pointer coordinates

var CurX;
var CurY;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain and pitch values

document.onmousemove = updatePage;

function updatePage(e) {
    KeyFlag = false;

    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    // This function has small slides! Not good to listen to.
    // oscillator.frequency.value = minFreq + Math.round((maxFreq-minFreq)*(CurX/WIDTH)/minFreq)*minFreq;

    // This version is instant step changes in frequency. Much better!
    oscillator.frequency.setValueAtTime(
      minFreq + Math.round((maxFreq-minFreq)*(CurX/WIDTH)/minFreq)*minFreq,
      state.audioContext.currentTime
    );
    gainNode.gain.value = minAmp * (volFactor**(CurY/HEIGHT));

    // oscillator.frequency.value = (CurX/WIDTH) * maxFreq;
    // gainNode.gain.value = (CurY/HEIGHT) * maxAmp;

    canvasDraw();
}

// mute button

var mute = document.querySelector('.mute');

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    gainNode.disconnect(state.audioContext.destination);
    mute.setAttribute('data-muted', 'true');
    mute.innerHTML = "Unmute";
  } else {
    gainNode.connect(state.audioContext.destination);
    mute.setAttribute('data-muted', 'false');
    mute.innerHTML = "Mute";
  };
}



// canvas visualization

function random(number1,number2) {
  var randomNo = number1 + (Math.floor(Math.random() * (number2 - number1)) + 1);
  return randomNo;
}

var canvas = document.querySelector('.canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

var canvasCtx = canvas.getContext('2d');

function canvasDraw() {
  if(KeyFlag == true) {
    rX = KeyX;
    rY = KeyY;
  } else {
    rX = CurX;
    rY = CurY;
  }
  rC = Math.floor((gainNode.gain.value/maxAmp)*30);

  canvasCtx.globalAlpha = 0.2;

  for(i=1;i<=15;i=i+2) {
    canvasCtx.beginPath();
    canvasCtx.fillStyle = 'rgb(' + 100+(i*10) + ',' + Math.floor((gainNode.gain.value/maxAmp)*255) + ',' + Math.floor((oscillator.frequency.value/maxFreq)*255) + ')';
    canvasCtx.arc(rX+random(0,50),rY+random(0,50),rC/2+i,(Math.PI/180)*0,(Math.PI/180)*360,false);
    canvasCtx.fill();
    canvasCtx.closePath();
  }
}

// clear screen

var clear = document.querySelector('.clear');

clear.onclick = function() {
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}

// keyboard controls

var body = document.querySelector('body');

var KeyX = 1;
var KeyY = 0.01;
var KeyFlag = false;

body.onkeydown = function(e) {
  KeyFlag = true;

  // 37 is arrow left, 39 is arrow right,
  // 38 is arrow up, 40 is arrow down

  if(e.keyCode == 37) {
    KeyX -= 20;
  };

  if(e.keyCode == 39) {
    KeyX += 20;
  };

  if(e.keyCode == 38) {
    KeyY -= 20;
  };

  if(e.keyCode == 40) {
    KeyY += 20;
  };

  // set max and min constraints for KeyX and KeyY

  if(KeyX < 1) {
    KeyX = 1;
  };

  if(KeyX > WIDTH) {
    KeyX = WIDTH;
  };

  if(KeyY < 0.01) {
    KeyY = 0.01;
  };

  if(KeyY > HEIGHT) {
    KeyY = HEIGHT;
  };

  oscillator.frequency.value = (KeyX/WIDTH) * maxFreq;
  gainNode.gain.value = (KeyY/HEIGHT) * maxAmp;
  //
  // oscillator.frequency.value = (KeyX/WIDTH) * maxFreq;
  // gainNode.gain.value = (KeyY/HEIGHT) * maxAmp;

  canvasDraw();
}