const arrayContainer = document.getElementById("array-container");
const commentary = document.getElementById("commentary");
const algorithmSelect = document.getElementById("algorithm");
const speedInput = document.getElementById("speed");
const generateArrayButton = document.getElementById("generate-array");
const startSortingButton = document.getElementById("start-sorting");
const resetButton = document.getElementById("reset");

let array = [];
let isSorting = false;
let animationSpeed = 2100 - parseInt(speedInput.value, 10); // Reverse: Higher slider value = faster speed

// Generate a random array
function generateArray(size = 20) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
  updateCommentary("New array generated. Choose an algorithm and start sorting!");
}

// Render the array
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.width = `${20}px`;
    arrayContainer.appendChild(bar);
  });
}

// Update commentary
function updateCommentary(text) {
  commentary.innerHTML = `<p>${text}</p>`;
}

// Bubble Sort Algorithm
async function bubbleSort() {
  updateCommentary("Bubble Sort: Comparing and swapping adjacent elements.");
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      if (array[j] > array[j + 1]) {
        updateCommentary(`Swapping ${array[j]} and ${array[j + 1]}`);
        await swap(bars, j, j + 1);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }

      bars[j].style.backgroundColor = "#007bff";
      bars[j + 1].style.backgroundColor = "#007bff";
    }
    bars[array.length - i - 1].classList.add("sorted");
  }
  updateCommentary("Array sorted using Bubble Sort!");
}

// Insertion Sort Algorithm
async function insertionSort() {
  updateCommentary("Insertion Sort: Placing each element in its correct position.");
  const bars = document.querySelectorAll(".bar");

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      bars[j].style.backgroundColor = "red";
      bars[j - 1].style.backgroundColor = "red";

      updateCommentary(`Swapping ${array[j]} and ${array[j - 1]}`);
      await swap(bars, j, j - 1);
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      bars[j].style.backgroundColor = "#007bff";
      bars[j - 1].style.backgroundColor = "#007bff";

      j--;
    }
  }

  document.querySelectorAll(".bar").forEach((bar) => bar.classList.add("sorted"));
  updateCommentary("Array sorted using Insertion Sort!");
}

// Swap two bars with animation
function swap(bars, i, j) {
  return new Promise((resolve) => {
    const tempHeight = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = tempHeight;
    setTimeout(resolve, animationSpeed);
  });
}

// Start sorting
async function startSorting() {
  if (isSorting) return;
  isSorting = true;

  const algorithm = algorithmSelect.value;

  if (algorithm === "bubbleSort") {
    await bubbleSort();
  } else if (algorithm === "insertionSort") {
    await insertionSort();
  }

  isSorting = false;
}

// Reset the array
function resetArray() {
  generateArray();
  isSorting = false;
}

// Event Listeners
generateArrayButton.addEventListener("click", () => generateArray());
startSortingButton.addEventListener("click", startSorting);
resetButton.addEventListener("click", resetArray);
speedInput.addEventListener("input", (e) => {
  animationSpeed = 2100 - parseInt(e.target.value, 10); // Reverse the toggle behavior
});

// Initial setup
generateArray();
