// 1. Light / Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// 2. Counter / Button Game
let count = 0;
const display = document.getElementById('count');
document.getElementById('incBtn').addEventListener('click', () => {
  count++;
  display.textContent = count;
});
document.getElementById('decBtn').addEventListener('click', () => {
  if (count > 0) {
    count--;
    display.textContent = count;
  }
});

// 3. Collapsible FAQ Section
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('open');
  });
});

// 4. Simple Dropdown Menu
const drop = document.querySelector('.dropdown');
document.getElementById('dropBtn').addEventListener('click', e => {
  e.stopPropagation();
  drop.classList.toggle('open');
});
document.addEventListener('click', () => {
  drop.classList.remove('open');
});

// 5. Tabbed Interface
document.querySelectorAll('.tabs nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all tabs
    document.querySelectorAll('.tabs nav button')
      .forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content')
      .forEach(c => c.classList.add('hidden'));

    // Activate clicked tab + content
    btn.classList.add('active');
    const target = btn.dataset.tab;
    document.getElementById(target).classList.remove('hidden');
  });
});
