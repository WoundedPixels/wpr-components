import React from 'react';

function ThinCircle(props) {
  const { cx, cy, r, stroke } = props;
  const scale = props.scale || 1;
  const strokeWidth = props['strokeWidth'] || 1;
  const thinStrokeWidth = strokeWidth / scale;

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke={stroke} fill="none" strokeWidth={thinStrokeWidth} />
    </g>
  );
}

export default ThinCircle;
