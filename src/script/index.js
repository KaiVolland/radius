function showRadius(event) {
  console.log('blalba', event);
  const container = document.querySelector('.container');
  container.style.setProperty('--radius', '300px');
  const { x, y } = event;
  container.style.setProperty('--x', x + 'px');
  container.style.setProperty('--y', y + 'px');
};

const map = document.getElementById('overviewmap');
map.addEventListener('mousedown', showRadius);
