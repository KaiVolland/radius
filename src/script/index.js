let map_stats = {
  'de_inferno': {
    damage: 620,
    radius: 1750,
    meterPerPixel: 0.75 // TODO: get accurate value
  },
  'de_dust2': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_mirage': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_nuke': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_overpass': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_cache': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_train': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_vertigo': {
    damage: 400,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  },
  'de_ancient': {
    damage: 500,
    radius: 1750,
    meterPerPixel: 1 // TODO: get accurate value
  }
};

const container = document.getElementById('map_container');
const overviewmap = document.getElementById('overviewmap');
const selectField = document.getElementById('cs_map_select');
const damageDisplay = document.getElementById('damage_display');
const radiusDisplay = document.getElementById('radius_display');

function showRadius(event) {
  const radiusInMeter = map_stats[selectField.value].radius;
  const damage = map_stats[selectField.value].damage;
  const meterPerPixel = map_stats[selectField.value].meterPerPixel;
  const meterPerDamage = radiusInMeter / damage; // usually 3.5
  const pixelPerDamage = meterPerDamage * meterPerPixel;

  const greeLinePixels = 1060; // how to calculate this from the given values
  const yellowLinePixels = 670; // how to calculate this from the given values
  const orangeLinePixels = 560;  // how to calculate this from the given values
  const redLinePixels = 431; // how to calculate this from the given values

  console.log({
    greeLinePixels,
    yellowLinePixels,
    orangeLinePixels,
    redLinePixels
  });

  container.style.setProperty('--radius1', `${redLinePixels}px`);
  container.style.setProperty('--radius2', `${orangeLinePixels}px`);
  container.style.setProperty('--radius3', `${yellowLinePixels}px`);
  container.style.setProperty('--radius4', `${greeLinePixels}px`);

  const {
    offsetX: x,
    offsetY: y
  } = event;
  container.style.setProperty('--x', x + 'px');
  container.style.setProperty('--y', y + 'px');
};

function onSelectChange(event) {
  const value = event.target.value;
  const radius = map_stats[selectField.value].radius;
  const damage = map_stats[selectField.value].damage;

  overviewmap.setAttribute('src', `assets/map_images/${value}.png`);
  map_container.style.setProperty('--display', value ? 'block' : none);
  damageDisplay.innerText = damage;
  radiusDisplay.innerText = radius;
};

overviewmap.addEventListener('mousedown', showRadius);
selectField.addEventListener('change', onSelectChange);
