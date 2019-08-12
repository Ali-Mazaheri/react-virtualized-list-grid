import React, { Component } from 'react';
import { render } from 'react-dom';

import { VirtualList } from './VirtualList'
import testData from "./testData.json";
import { Row } from './Row';

import './style.css';

class App extends Component<any, any> {
  render() {
    return (
      <VirtualList
        data={testData}
        height={350}
        rowCount={6} //Number of actual rows to show on the screen
        renderRow={(item, index) =>  <Row data={item} /> }
      />
    );
  }
}

const root = document.getElementById('root');
render(<App />, root);
