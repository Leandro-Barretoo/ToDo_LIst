export function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

export function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

export function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

export function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

export function drop(e) {
  e.target.classList.remove('drag-over');
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  e.target.parentNode.appendChild(draggable);
  draggable.classList.remove('hide');
}
