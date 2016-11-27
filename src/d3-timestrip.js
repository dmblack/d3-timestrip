import { getXScale } from './axis';
import { getMin, getMax } from './utils';

const width = 500, height = 150;

export function timeStrip() {
  function strip(parent) {
    let data = parent.datum(),
        min = getMin(data, 'starting_time'),
        max = getMax(data, 'ending_time');

        console.log('data', data);

    let g = parent.append('g')
      .append('rect')
        .style('fill', 'black')
        .style('width', 50)
        .style('height', 50);

    console.log(min, max);
  }

  return strip;
};