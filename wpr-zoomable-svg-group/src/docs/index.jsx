import React from 'react';
import { render } from 'react-dom';
import ZoomableGroup from '../../lib';
import ThinCircle from './ThinCircle';

import './styles.css';

function Demo() {
  return (
    <div>
      <h1>Demo for WPR Zoomable Group</h1>
      <div>
        A ZoomableGroup can show different children based on the zoom level. It resolves into a svg
        with the specified children. Pan and zoom work as expected in the world of D3.js.
      </div>
      <div>Parameters:</div>
      <ul>
        <li>width: width of the resulting svg</li>
        <li>height: height of the resulting svg</li>
        <li>maxZoom: maximum zoom to be applied as a transform on the children of the resulting svg. Defaults to 200.</li>
      </ul>

      <div>Each immediate child of a ZoomableGroup should be a SVG group ( g ) or something that resolves to an SVG group.
      Children can specify a minScale and maxScale property.
      When rendering children, the ZoomableGroup filters out any whose minScale and maxScale do
      not contain the current scale. Or to reverse things, it includes children if minScale &lt;= scale &lt; maxScale.
      </div>
      <div>
      minScale defaults to zero.  maxScale defaults to infinity.
      </div>

      <div>This allows graphics to show a higher level of detail as the user zooms in. For an example with a map, see&nbsp;
      <a href="https://colleges.scrylr.com">colleges.scrylr.com</a>. As you zoom in the states give way to counties.
      </div>

      <div>The minScale, maxScale and current scale are passed as props to each surviving child.
      They are free to ignore them or maybe do useful things, like thin out lines as the scale goes up.
      In the first example below, the ThinCircle component uses the scale to keep the stroke width consistent.</div>

      <h2>Blue circle splits into 2 red circles then 4 green circles</h2>
      <ZoomableGroup width="1000" height="500" maxZoom="40">
        <ThinCircle minScale="0" maxScale="8" cx="500" cy="250" r="8" stroke="blue" fill="none" stroke-width="2" />
        <g minScale="8" maxScale="16">
          <circle cx="495" cy="245" r="8" stroke="red" fill="none" stroke-width="0.9" />
          <circle cx="505" cy="255" r="8" stroke="red" fill="none" stroke-width="0.9" />
        </g>
        <g minScale="16" maxScale="41">
          <circle cx="495" cy="245" r="8" stroke="green" fill="none" stroke-width="0.8" />
          <circle cx="495" cy="255" r="8" stroke="green" fill="none" stroke-width="0.8" />
          <circle cx="505" cy="245" r="8" stroke="green" fill="none" stroke-width="0.8" />
          <circle cx="505" cy="255" r="8" stroke="green" fill="none" stroke-width="0.8" />
        </g>
      </ZoomableGroup>

      <h2>Blue circle stays. 2 red circles come and go.</h2>
      <ZoomableGroup width="1000" height="500" maxZoom="50">
        <ThinCircle cx="500" cy="250" r="8" stroke="blue" fill="none" stroke-width="2" />
        <g minScale="8" maxScale="16">
          <circle cx="495" cy="245" r="8" stroke="red" fill="none" stroke-width="0.9" />
          <circle cx="505" cy="255" r="8" stroke="red" fill="none" stroke-width="0.9" />
        </g>
      </ZoomableGroup>
      <ThinCircle/>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
