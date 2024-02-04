const RES_SMALL = 576;
const RES_MEDIUM = 768;
const RES_LARGE = 992;
const RES_XLARGE = 1200;

export function getDeviceWidth(): number {
  return window.innerWidth > 0 ? window.innerWidth : screen.width;
}

export function lts(): boolean {
  return getDeviceWidth() < RES_SMALL;
}
