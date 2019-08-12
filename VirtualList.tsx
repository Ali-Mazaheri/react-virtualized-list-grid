import React, { Component } from 'react';

export class VirtualList extends Component<any, any> {
  rowHeight = 0;
  rowCount = 0;

  constructor(props) {
    super(props);
    let rowCount = Math.ceil(this.props.rowCount);
    let rowHeight = (this.props.height - 19) / rowCount;

    this.rowCount = rowCount;
    this.rowHeight = rowHeight;

    this.state = {
      height: 0,
      data: this.props.data.slice(0, rowCount),
      positionY: 0
    };
  }

  render() {
    let { height, data } = this.props;
    return (
      <div style={{ position: "relative", height: height, overflow: "scroll" }}
        onScroll={
          (e) => {
            let scrollTop = e.currentTarget.scrollTop;
            let index = Math.floor(scrollTop / this.rowHeight);
            let start = Math.max(0, index);
            let end = Math.min(data.length, start + this.rowCount);

            this.setState({
              data: this.props.data.slice(start, end),
              positionY: scrollTop
            });
          }
        }>

        <div style={{ position: "relative", height: 10 + data.length * this.rowHeight }}>
          <div style={{ width: "100%", position: "absolute", left: 0, top: this.state.positionY }}>
            {this.state.data.map((a, b) => {

              return <div key={b} style={{}}>
                {this.props.renderRow(a, b)}
              </div>
              
            })}
          </div>
        </div>
      </div>
    );
  }
}