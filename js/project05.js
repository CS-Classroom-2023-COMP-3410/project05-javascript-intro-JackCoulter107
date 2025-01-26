const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const brushSizeInput = document.getElementById('brush-size');
const brushColorInput = document.getElementById('brush-color');
const bgColorInput = document.getElementById('bg-color');
const undoButton = document.getElementById('undo');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');

let isDrawing = false;
let brushSize = parseInt(brushSizeInput.value, 10);
let brushColor = brushColorInput.value;
let backgroundColor = bgColorInput.value;
let history = [];

// Set initial canvas background
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Start drawing
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// Draw on canvas
canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.stroke();
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
  if (isDrawing) {
    isDrawing = false;
    ctx.closePath();
    saveHistory();
  }
});

// Save history for undo
function saveHistory() {
  if (history.length > 10) {
    history.shift(); // Limit history to the last 10 states
  }
  history.push(canvas.toDataURL());
}

// Undo last stroke
undoButton.addEventListener('click', () => {
  if (history.length > 0) {
    const lastState = history.pop();
    const img = new Image();
    img.src = lastState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
});

// Clear canvas
clearButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  history = [];
});

// Save canvas as image
saveButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'drawing.png';
  link.href = canvas.toDataURL();
  link.click();
});

// Update brush size
brushSizeInput.addEventListener('input', (e) => {
  brushSize = parseInt(e.target.value, 10);
});

// Update brush color
brushColorInput.addEventListener('input', (e) => {
  brushColor = e.target.value;
});

// Update background color
bgColorInput.addEventListener('input', (e) => {
  backgroundColor = e.target.value;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  saveHistory();
});
