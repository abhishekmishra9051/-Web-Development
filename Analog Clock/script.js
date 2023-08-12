// Selecting clock elements
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// Create spikes for seconds and minutes
for (let s = 0; s < 60; s++) {
  // Create elements for spikes
  let mSpikeEl = document.createElement('i'); // for minutes
  let sSpikeEl = document.createElement('i'); // for seconds
  
  // Add classes and rotation styles to spikes
  mSpikeEl.className = 'spike';
  sSpikeEl.className = 'spike';
  mSpikeEl.style = `--rotate:${6 * s}deg`; // Rotate each minute spike by 6 degrees
  sSpikeEl.style = `--rotate:${6 * s}deg`; // Rotate each second spike by 6 degrees
  
  // Set data attribute to store index for hours marking
  mSpikeEl.setAttribute('data-i', s);
  sSpikeEl.setAttribute('data-i', s);

  // Append spikes to their respective containers
  seconds.append(sSpikeEl);
  minutes.append(mSpikeEl);
}

// Function to update clock time
function getTime() {
  // Get the current date and time
  let date = new Date();
  let s = date.getSeconds(); // Seconds
  let m = date.getMinutes(); // Minutes

  // Update hour and minute display
  hour.textContent = date.getHours(); // Update hour display
  minute.textContent = m; // Update minute display

  // Rotate the minutes dial
  minutes.style = `--dRotate:${6 * m}deg`;

  // Add or remove animation class for seconds dial
  if (s == 0) {
    seconds.classList.add('stop-anim'); // Add class to stop animation at 12 o'clock
  } else {
    seconds.classList.remove('stop-anim'); // Remove class to animate rest of the time
  }
  
  // Add or remove animation class for minutes dial
  if (m == 0) {
    minutes.classList.add('stop-anim'); // Add class to stop animation at 12 o'clock
  } else {
    minutes.classList.remove('stop-anim'); // Remove class to animate rest of the time
  }

  // Rotate the seconds dial
  seconds.style = `--dRotate:${6 * s}deg`;
}

// Update time every second and call the function immediately
setInterval(getTime, 1000);
getTime();
