document.addEventListener('DOMContentLoaded', function () {
  const drumPads = document.querySelectorAll('.drum-pad');
  const display = document.getElementById('display');

  drumPads.forEach((pad) => {
    pad.addEventListener('click', playSound);
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const matchingPad = [...drumPads].find((pad) => pad.id === key);
    if (matchingPad) {
      playSound.call(matchingPad, event);
    }
  });

  function playSound(event) {
    const audio = this.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.textContent = audio.id;
    }
  }
});
