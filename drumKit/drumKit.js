window.addEventListener('keydown', function(e){
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!sound) return; // to stop the function if no sound
  sound.currentTime = 0; // rewind to the start
  sound.play();
  key.classList.add('playing');
});


const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', function() {
  key.classList.remove('playing')
}));
