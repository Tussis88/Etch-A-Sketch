const width = 16;
const height = 16;

const container = document.querySelector("#container");

for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", (e) => {
      console.log(`w: ${i}, h: ${j}`);
      e.target.style.backgroundColor = "#eb6f92";
    });
    container.appendChild(pixel);
  }
}
