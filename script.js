const background = document.querySelector('.background');
const emojis = ['💻', '🖥️', '🧠', '⚙️', '💡','</>','📱'];

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.animationDuration = 8 + Math.random() * 5 + 's';
  span.style.fontSize = 1.5 + Math.random() * 2 + 'rem';
  background.appendChild(span);
}
