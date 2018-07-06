import React from "react";
import { render } from "react-dom";
import ZoomableGroup from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo for WPR Zoomable Group</h1>
      <ZoomableGroup width="1000" height="500">
        <g minScale="0" maxScale="10">
          <circle cx="500" cy="250" r="8" stroke="blue" fill="none" stroke-width="1"/>
        </g>
        <g minScale="10" maxScale="100">
          <circle cx="500" cy="250" r="0.5" stroke="red" fill="none" stroke-width="0.1"/>
          <circle cx="501" cy="251" r="0.5" stroke="red" fill="none" stroke-width="0.1"/>
        </g>
        <g minScale="100" maxScale="1500">
          <circle cx="500" cy="250" r="0.25" stroke="green" fill="none" stroke-width="0.05"/>
          <circle cx="500" cy="251" r="0.25" stroke="green" fill="none" stroke-width="0.05"/>
          <circle cx="501" cy="250" r="0.25" stroke="green" fill="none" stroke-width="0.05"/>
          <circle cx="501" cy="251" r="0.25" stroke="green" fill="none" stroke-width="0.05"/>
        </g>
      </ZoomableGroup>
      <div>Blue circle splits into 2 red circles then 4 green circles</div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
