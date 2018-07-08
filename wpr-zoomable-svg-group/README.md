## Installation

`npm i --save wpr-zoomable-svg-group`

```
import ZoomableGroup from 'wpr-zoomable-svg-group';

...
render() {
  return (
    <ZoomableGroup width="500" height="250" maxZoom="20">
      <g minScale="4" maxScale="8">
        <circle cx="247" cy="122" r="4" stroke="red" fill="none" strokeWidth="0.9" />
      </g>
    </ZoomableGroup>
  )
}
...
```

## Use

A ZoomableGroup can show different children based on the zoom level. It resolves into a svg with the specified children. Pan and zoom work as expected in the world of D3.js.  
Parameters:

- width: width of the resulting svg
- height: height of the resulting svg
- maxZoom: maximum zoom to be applied as a transform on the children of the resulting svg. Defaults to 200.

Each immediate child of a ZoomableGroup should be a SVG group ( g ) or something that resolves to an SVG group. Children can specify a minScale and maxScale property. When rendering children, the ZoomableGroup filters out any whose minScale and maxScale do not contain the current scale. To be precise, it includes children if minScale <= scale < maxScale.
minScale defaults to zero. maxScale defaults to infinity.

This allows a ZoomableGroup to show a different level of detail as the user zooms in. For an example with a map, see [colleges.scrylr.com](https://colleges.scrylr.com). As you zoom in the states give way to counties.

The minScale, maxScale and current scale are passed as props to each surviving child. They are free to ignore them or use them to do useful things, like thin out lines as the scale goes up. In the first example below, the ThinCircle component uses the scale to keep the stroke width consistent.

### Credits

Loosely based on https://github.com/markusenglund/react-npm-component-starter
