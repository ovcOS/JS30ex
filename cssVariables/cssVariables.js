const controls = document.querySelectorAll('.controls input');

controls.forEach(control => control.addEventListener('change', updateValue));
controls.forEach(control => control.addEventListener('mousemove', updateValue));

function updateValue(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};
