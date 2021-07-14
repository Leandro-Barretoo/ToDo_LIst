import './style.css'

let taskArr = [{
  description: "Do 30 min cardio",
  completed: false,
  index: 1
}, {
  description: "Meditate 10 min",
  completed: true,
  index: 2
}, {
  description: "Do dinner",
  completed: false,
  index: 3
}];
  
function displayTask() {
  for (let i = 0; i < taskArr.length; i++) {
    const cont = document.getElementById('main-container');
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'item-container')
    const item = document.createElement('p');
    item.setAttribute('class', 'item');
    item.innerHTML = taskArr[i].description;
    itemContainer.appendChild(item);
    cont.appendChild(itemContainer);
  };
}
  
document.addEventListener('DOMContentLoaded', displayTask);
