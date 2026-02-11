// Gas and Oil Mix Calculator
// MicroSim template version 2026.02

// global variables for width and height
let containerWidth; // calculated by container upon init and changed on resize
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 110; // 2 rows x 35 + 30 for tick labels
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;

// margin around the active plotting region
let margin = 25;
let sliderLeftMargin = 220;
let defaultTextSize = 16;

// sliders
let gasSlider;
let ratioSlider;

// constants
const GALLON_TO_OZ = 128;
const OZ_TO_ML = 29.5735;
const RATIO_OPTIONS = [32, 40, 50];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  gasSlider = createSlider(1.0, 5.0, 1.25, 0.25);
  gasSlider.position(sliderLeftMargin, drawHeight + 5);
  gasSlider.size(canvasWidth - sliderLeftMargin - margin);

  ratioSlider = createSlider(0, RATIO_OPTIONS.length - 1, 2, 1);
  ratioSlider.position(sliderLeftMargin, drawHeight + 45);
  ratioSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('Interactive calculator for two-cycle fuel mix with sliders for gas amount and gas-to-oil ratio', LABEL);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  // values
  const gasGallons = gasSlider.value();
  const ratio = RATIO_OPTIONS[ratioSlider.value()];
  const oilOz = (gasGallons * GALLON_TO_OZ) / ratio;
  const oilMl = oilOz * OZ_TO_ML;
  const oilTbsp = oilOz * 2;

  // title
  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Gas and Oil Mix', canvasWidth / 2, 10);

  // draw gas can gauge
  const canX = 40;
  const canY = 70;
  const canW = 140;
  const canH = 230;
  const maxGas = 5.0;
  const level = constrain(gasGallons / maxGas, 0, 1);
  const fillH = canH * level;

  stroke('gray');
  fill('#f8fafc');
  rect(canX, canY, canW, canH, 6);

  noStroke();
  fill('#3b82f6');
  const innerH = Math.max(0, fillH - 12);
  if (innerH > 0) {
    rect(canX + 6, canY + canH - innerH - 6, canW - 12, innerH, 4);
  }

  fill('black');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Gas Can', canX + canW / 2, canY + canH + 8);

  // info panel
  const panelX = Math.max(220, Math.floor(canvasWidth * 0.45));
  const panelY = 80;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  text('Gas amount:', panelX, panelY);
  text(gasGallons.toFixed(2) + ' gallons', panelX, panelY + 22);

  text('Mix ratio:', panelX, panelY + 58);
  text(ratio + ':1 (gas:oil)', panelX, panelY + 80);

  text('Oil needed:', panelX, panelY + 116);
  text(oilOz.toFixed(2) + ' fl oz', panelX, panelY + 138);
  text(oilMl.toFixed(0) + ' mL', panelX, panelY + 160);
  text(oilTbsp.toFixed(1) + ' tbsp', panelX, panelY + 182);

  // control labels
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Gas (gal): ' + gasGallons.toFixed(2), 20, drawHeight + 15);
  text('Ratio (gas:oil): ' + ratio + ':1', 20, drawHeight + 50);

  // ratio ticks and labels
  const sliderWidth = canvasWidth - sliderLeftMargin - margin;
  const tickY = drawHeight + 78;
  const labelY = drawHeight + 90;
  stroke('gray');
  strokeWeight(1);
  for (let i = 0; i < RATIO_OPTIONS.length; i++) {
    const x = sliderLeftMargin + (sliderWidth * i) / (RATIO_OPTIONS.length - 1);
    line(x, tickY - 6, x, tickY);
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(12);
    text(RATIO_OPTIONS[i] + ':1', x, labelY);
    stroke('gray');
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  gasSlider.size(canvasWidth - sliderLeftMargin - margin);
  ratioSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
