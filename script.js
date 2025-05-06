let secretNu = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.btn-1 button')?.addEventListener('click', function () {
  const guess = Number(document.querySelector('.left-input input').value);
  console.log('secretNu', 'guess');
  if (!guess) {
    document.querySelector('.right-text').textContent = 'no number';
  } else if (guess === secretNu) {
    document.querySelector('.right-text').textContent = 'correct number';
    document.querySelector('.inputbox').textContent = secretNu;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.inputbox').style.width = '20rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.text-3').textContent = 'HIGHSCORE:' + highScore;
    }
  } else if (guess > secretNu) {
    if (score > 0) {
      document.querySelector('.right-text').textContent = 'Too High';
      score--;
      document.querySelector('.text-2').textContent = score;
    } else {
      document.querySelector('.right-text').textContent = 'you lost the game';
    }
  } else if (guess < secretNu) {
    if (score > 0) {
      document.querySelector('.right-text').textContent = 'Too Low';
      score--;
      document.querySelector('.text-2').textContent = 'SCORE :' + score;
      document.querySelector('.right-text').style.fontSize = '50px';
    } else {
      document.querySelector('.right-text').textContent = 'you lost the game';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  }
});
document.querySelector('.btn button').addEventListener('click', function () {
  score = 20;
  secretNu = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.right-text').textContent = 'START GUESSING......';
  document.querySelector('.text-2').textContent = 'score : 20';
  document.querySelector('.inputbox').textContent = '?';
  document.querySelector('.left-input input').value = 'ghfhg';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.inputbox').style.width = '10rem';
  document.querySelector('.right-text ').style.fontSize = '40px';
  document.querySelector('.text-2').style.fontSize = '30px';
  document.querySelector('.text-3').style.fontSize = '20px';
  document.querySelector('.inputbox').style.fontSize = '40px';
});
