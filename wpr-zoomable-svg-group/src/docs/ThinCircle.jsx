import React from 'react';

function ThinCircle(props) {

  const {cx, cy, r, stroke, scale} = props;
  const strokeWidth = props['stroke-width'];
  const thinStrokeWidth = strokeWidth / scale;

  return (
  <g>
    <circle cx={cx} cy={cy} r={r} stroke={stroke} fill="none" stroke-width={thinStrokeWidth} />
  </g>
  )
}

export default ThinCircle;
