let colorArr = [];
const colorSelect = document.getElementById("color-select");
const mods = document.getElementById("mods");
const scheme = document.getElementById("scheme");

const render = () => {
  let html = "";
  colorArr.map(color => {
    html += `
      <div class="colors">
        <div class="color" style="background-color: ${color.hex.value};"></div>
        <div class="color-code">
          ${color.hex.value}
        </div>
      </div>
    `;
  });
  scheme.innerHTML = html;
};

const getColors = async (hexOfColor, selectedMode) => {
  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexOfColor}&mode=${selectedMode}`);
  const data = await response.json();
  colorArr = data.colors;
};

const handleClick = async () => {
  const hexOfColor = colorSelect.value.substring(1);
  const selectedMode = mods.value;
  await getColors(hexOfColor, selectedMode);
  render();
};

document.getElementById("submit-btn").addEventListener("click", handleClick);

await handleClick(); // initial scheme