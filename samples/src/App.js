import React, { Component } from 'react';

import ZoomableGroup from 'wpr-zoomable-svg-group';
import ThinCircle from './ThinCircle';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Samples for Zoomable Group</h2>
        <div>
          A ZoomableGroup can show different children based on the zoom level. It resolves into a
          svg with the specified children. Pan and zoom work as expected in the world of D3.js.
        </div>
        <div>Parameters:</div>
        <ul>
          <li>width: width of the resulting svg</li>
          <li>height: height of the resulting svg</li>
          <li>
            maxZoom: maximum zoom to be applied as a transform on the children of the resulting svg.
            Defaults to 200.
          </li>
        </ul>
        <div>
          Each immediate child of a ZoomableGroup should be a SVG group ( g ) or something that
          resolves to an SVG group. Children can specify a minScale and maxScale property. When
          rendering children, the ZoomableGroup filters out any whose minScale and maxScale do not
          contain the current scale. Or to reverse things, it includes children if minScale &lt;=
          scale &lt; maxScale.
        </div>
        <div>minScale defaults to zero. maxScale defaults to infinity.</div>
        <div>
          This allows graphics to show a higher level of detail as the user zooms in. For an example
          with a map, see&nbsp;
          <a href="https://colleges.scrylr.com">colleges.scrylr.com</a>. As you zoom in the states
          give way to counties.
        </div>
        <div>
          The minScale, maxScale and current scale are passed as props to each surviving child. They
          are free to ignore them or maybe do useful things, like thin out lines as the scale goes
          up. In the first example below, the ThinCircle component uses the scale to keep the stroke
          width consistent.
        </div>
        <h2>Blue circle splits into 2 red circles then 4 green circles. Blue line stays thin.</h2>
        <ZoomableGroup width="500" height="250" maxZoom="20">
          <ThinCircle
            minScale="0"
            maxScale="4"
            cx="250"
            cy="125"
            r="4"
            stroke="blue"
            fill="none"
            strokeWidth="1"
          />
          <g minScale="4" maxScale="8">
            <circle cx="247" cy="122" r="4" stroke="red" fill="none" strokeWidth="0.9" />
            <circle cx="252" cy="127" r="4" stroke="red" fill="none" strokeWidth="0.9" />
          </g>
          <g minScale="8" maxScale="21">
            <circle cx="247" cy="122" r="4" stroke="green" fill="none" strokeWidth="0.8" />
            <circle cx="247" cy="127" r="4" stroke="green" fill="none" strokeWidth="0.8" />
            <circle cx="252" cy="122" r="4" stroke="green" fill="none" strokeWidth="0.8" />
            <circle cx="252" cy="127" r="4" stroke="green" fill="none" strokeWidth="0.8" />
          </g>
        </ZoomableGroup>
        <h2>Blue circle stays. 2 red circles come and go.</h2>
        <ZoomableGroup width="500" height="250" maxZoom="20">
          <ThinCircle cx="250" cy="125" r="4" stroke="blue" fill="none" strokeWidth="1" />
          <g minScale="4" maxScale="8">
            <circle cx="247" cy="122" r="4" stroke="red" fill="none" strokeWidth="0.9" />
            <circle cx="252" cy="127" r="4" stroke="red" fill="none" strokeWidth="0.9" />
          </g>
        </ZoomableGroup>
      </div>
    );
  }
}

export default App;
