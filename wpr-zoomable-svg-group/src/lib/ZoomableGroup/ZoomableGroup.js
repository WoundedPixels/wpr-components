import React, { Component } from 'react';

import * as d3 from 'd3';

class ZoomableGroup extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
    this.init = this.init.bind(this);
    this.zoomed = this.zoomed.bind(this);

    this.state = { transform: { k: 1, x: 0, y: 0 } };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const maxZoom = this.props.maxZoom ? parseInt(this.props.maxZoom, 10) : 200;

    const zoom = d3
      .zoom()
      .scaleExtent([1, maxZoom])
      .on('zoom', this.zoomed);
    const node = d3.select(this.node);
    node.call(zoom);

    this.viewG = node.select('g');
  }

  zoomed() {
    const { transform } = d3.event;
    this.viewG.attr('transform', transform);
    this.setState({ transform: transform });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      const scale = this.state.transform.k;
      const { minScale, maxScale } = child.props;

      const hidden = scale < minScale || scale >= maxScale;

      if (hidden) {
        return null;
      }

      return React.cloneElement(child, {
        scale,
      });
    });
  }

  render() {
    const t = this.state.transform;
    const transform = `translate(${t.x} ${t.y}) scale(${t.k})`;

    return (
      <svg
        className="ZoomableGroup"
        width={this.props.width}
        height={this.props.height}
        ref={node => (this.node = node)}>
        <g transform={transform}>{this.renderChildren()}</g>
      </svg>
    );
  }
}

export default ZoomableGroup;
