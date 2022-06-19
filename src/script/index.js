function showRadius(event) {
  const container = document.querySelector('.container');
  container.style.setProperty('--radius0', '0px');
  container.style.setProperty('--radius1', '380px');
  container.style.setProperty('--radius2', '470px');
  container.style.setProperty('--radius3', '580px');
  container.style.setProperty('--radius4', '900px');
  const { offsetX: x, offsetY: y } = event;
  container.style.setProperty('--x', x + 'px');
  container.style.setProperty('--y', y + 'px');
};

const map = document.getElementById('overviewmap');
map.addEventListener('mousedown', showRadius);
