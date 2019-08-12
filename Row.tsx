import React, { Component } from 'react';

export class Row extends Component {
  render (){
    let {data} = this.props;
    let c = { border: "solid 1px gray", height: "100%" };
  return <div style={c}>
    <div style={{ backgroundColor: "lightgray" }}>
      {`${data.index + 1} of 2000 -  ${data.firstName}  ${data.lastName}`}
    </div>

    <div style={{ display: "flex" }}>
      {data.friends.map(f => (
        <span key={f.id} style={{ flex: 1 }}>{f.firstName}<br />{f.lastName}</span>
      ))
      }
    </div>
  </div>
  }
}