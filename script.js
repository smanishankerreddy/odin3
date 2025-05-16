const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');

function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
    container.appendChild(cell);
  }
}

resetBtn.addEventListener('click', () => {
  let newSize = prompt("Enter new grid size (max 100):");
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Initial 16x16 grid
createGrid(16);
