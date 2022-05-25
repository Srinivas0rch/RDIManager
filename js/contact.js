document.getElementById('subject').addEventListener('change', function() {
  const inputOther = document.querySelector('.inputOther');
  if(this.value == 'other') {
    inputOther.classList.add('visible');
  }
  else {
    inputOther.classList.remove('visible');
  }
});

