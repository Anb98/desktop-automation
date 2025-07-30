import { mouse, Point, straightTo, screen } from "@nut-tree-fork/nut-js";

// Global configuration
mouse.config.mouseSpeed = 3000; // Maximum speed

/**
 * Math utilities for normalize, interpolate and map values.
 */
const normalize = (value: number, min: number, max: number): number =>
  (value - min) / (max - min);
const interpolate = (normValue: number, min: number, max: number): number =>
  min + (max - min) * normValue;
const map = (
  value: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number
): number => {
  const clamped = Math.max(min1, Math.min(value, max1));
  return interpolate(normalize(clamped, min1, max1), min2, max2);
};

/**
 * Moves the mouse in an animated circle at the center of the screen.
 * @param radius Circle radius in pixels
 * @param stepIncrement Angle increment per frame
 * @param frameDelay Milliseconds between frames
 */
async function moveMouseInCircle(
  radius: number = 200,
  stepIncrement: number = 2,
  frameDelay: number = 10
): Promise<void> {
  const width = await screen.width();
  const height = await screen.height();
  const origin = new Point(width / 2, height / 2);
  let angle = 1;

  const updatePosition = async (deg: number) => {
    const t = map(deg, 0, 360, 0, 2 * Math.PI);
    const x = Math.floor(origin.x + radius * Math.cos(t));
    const y = Math.floor(origin.y + radius * Math.sin(t));
    await mouse.move(straightTo(new Point(x, y)));
  };

  const render = async () => {
    angle += stepIncrement;
    if (angle > 360) angle = 1;
    await updatePosition(angle);
    setTimeout(render, frameDelay);
  };

  await render();
}

// Run animation
moveMouseInCircle();
