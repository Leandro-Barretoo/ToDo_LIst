import './style.css';
import {dragStart} from './dragdrop.js';
import {dragEnter} from './dragdrop.js';
import {dragOver} from './dragdrop.js';
import {dragLeave} from './dragdrop.js';
import {drop} from './dragdrop.js';

let taskArr = [{
  description: 'Do 30 min cardio',
  completed: false,
  index: 1,
}, {
  description: 'Meditate 10 min',
  completed: true,
  index: 2,
}, {
  description: 'Do dinner',
  completed: false,
  index: 3,
}, {
  description: 'Codeeee!!!',
  completed: false,
  index: 4,
}];

taskArr = taskArr.reverse();

function displayTask() {
  for (let i = 0; i < taskArr.length; i += 1) {
    const cont = document.getElementById('main-container');
    const itemPlaceholder = document.createElement('div');
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'item-container');
    itemContainer.setAttribute('id', taskArr[i].index);
    itemContainer.setAttribute('draggable', 'true');
    const squareContainer = document.createElement('div');
    squareContainer.setAttribute('class', 'square-container');
    const icon = document.createElement('input');
    icon.setAttribute('type', 'checkbox');
    icon.setAttribute('class', 'isChecked')
    squareContainer.appendChild(icon);
    const item = document.createElement('p');
    item.setAttribute('class', 'item');
    item.innerHTML = taskArr[i].description;
    squareContainer.appendChild(item);
    itemContainer.appendChild(squareContainer);
    const dotsContainer = document.createElement('div');
    dotsContainer.setAttribute('class', 'dots-container');
    const iconTwo = document.createElement('i');
    iconTwo.setAttribute('class', 'fas fa-ellipsis-v');
    dotsContainer.appendChild(iconTwo);
    itemContainer.appendChild(dotsContainer);
    itemPlaceholder.appendChild(itemContainer);
    cont.appendChild(itemPlaceholder);
  }

  if (taskArr.length > 0) {
    const cont = document.getElementById('main-container');
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'clear-container');
    itemContainer.setAttribute('id', 'clear');
    const clear = document.createElement('p');
    clear.innerHTML = 'Clear all completed';
    itemContainer.appendChild(clear);
    cont.appendChild(itemContainer);
  };
  console.log(taskArr);
}

document.addEventListener('DOMContentLoaded', () => {
  displayTask();
  const places = document.querySelectorAll('.item-container');

  places.forEach(place => {
    place.addEventListener('dragstart', dragStart);
    place.addEventListener('dragenter', dragEnter);
    place.addEventListener('dragover', dragOver);
    place.addEventListener('dragleave', dragLeave);
    place.addEventListener('drop', drop);
  });
});
