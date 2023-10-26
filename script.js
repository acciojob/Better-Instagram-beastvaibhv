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

// Drag end event
function dragEnd() {
  selectedImage = null;
}

// Allow dropping on the parent div
const parent = document.getElementById('parent');
parent.addEventListener('dragover', allowDrop);
parent.addEventListener('drop', drop);

// Allow drop event
function allowDrop(e) {
  e.preventDefault();
}

// Drop event
function drop(e) {
  e.preventDefault();
  if (selectedImage) {
    // Replace the target div's HTML with the selected div's HTML
    this.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
}
