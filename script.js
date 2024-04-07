const gridWidth = 16;

const container = document.querySelector("#container");
const button = document.querySelector("#gridButton");
button.textContent = `grid: ${gridWidth}`;

const createGrid = (width) => {
  for (let i = 0; i < width * width; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#eb6f92";
      opacityChanger(e);
    });
    pixel.style.flexBasis = `${100 / width}%`;
    container.appendChild(pixel);
  }
};

const changeWidth = () => {
  let newWidth = prompt("Set the new grid resolution:");
  while (isNaN(newWidth) || newWidth > 64 || newWidth < 0) {
    newWidth = prompt(
      `${newWidth} is not a valid value. You need to insert a number beetween 1 and 64`,
    );
  }
  console.log(newWidth);
  if (newWidth == null) newWidth = 16;
  const oldGrid = document.querySelectorAll(".pixel");
  oldGrid.forEach((item) => {
    container.removeChild(item);
  });
  createGrid(newWidth);
  button.textContent = `grid: ${newWidth}`;
};

const opacityChanger = (pixel) => {
  let opacityValue = parseFloat(pixel.target.style.opacity || 0);
  console.log(opacityValue);
  if (opacityValue < 1) opacityValue += 0.1;
  pixel.target.style.opacity = opacityValue.toString();
};

createGrid(gridWidth);
