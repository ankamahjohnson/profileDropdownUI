const avatarBtn = document.getElementById('avatarBtn');
const dropdown  = document.getElementById('dropdown');

// Toggle dropdown
avatarBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

// Close on outside click
document.addEventListener('click', () => {
  dropdown.classList.remove('open');
});

dropdown.addEventListener('click', (e) => e.stopPropagation());

// Ripple on menu item click
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = Math.max(this.offsetWidth, this.offsetHeight);
    ripple.style.width  = ripple.style.height = size + 'px';
    ripple.style.left   = (e.offsetX - size / 2) + 'px';
    ripple.style.top    = (e.offsetY - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});