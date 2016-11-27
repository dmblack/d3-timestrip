import { getXScale } from './x-axis';

export function timeStrip() {
  function strip(selection) {
    let data = selection.datum();
    console.log(data);
  }

  console.log(getXScale());

  return strip;
};