//your code here
// Get all the draggable divs
const images = document.querySelectorAll('.image');

// Store the currently selected element
let selectedImage = null;

// Loop through the draggable divs
images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragend', dragEnd);
});

// Drag start event
function dragStart(e) {
  selectedImage = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}


function dragEnd() {
  selectedImage = null;
}


const parent = document.getElementById('parent');
parent.addEventListener('dragover', allowDrop);
parent.addEventListener('drop', drop);


function allowDrop(e) {
  e.preventDefault();
}

// Drop event
function drop(e) {
  e.preventDefault();
  if (selectedImage) {
    
    this.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
}
