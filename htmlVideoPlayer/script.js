const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
};

function toggleButton() {
  if(video.paused){
    toggle.textContent = '▶️'
  } else {
    toggle.textContent = '⏸'
  }
};

function skipVideo(){
  video.currentTime += parseInt(this.dataset.skip)
};

function setRange(){
  video[this.name] = this.value;
};

function videoProgress(){
  let timePercentage = (video.currentTime / video.duration * 100)
  progressBar.style.flexBasis = `${timePercentage}%`;
};

function dragProgress(e){
  let barPercentage = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = barPercentage;
};

toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('progress', videoProgress);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skipVideo));

ranges.forEach(range => range.addEventListener('change', setRange));

progress.addEventListener('click', dragProgress);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && dragProgress(e))
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
