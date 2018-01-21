import React, { Component } from 'react';
import * as R from 'ramda';
import './App.css';

class App extends Component {

  renderBoxes() {
    return R.pipe(
      R.splitEvery(10),
      R.addIndex(R.map)((row, index) => {
        return <div className="box-row" key={index}>
          {R.map(box => {
            return <div key={box} className="box">
              <span> {box} </span>
            </div>
          }, row)}
        </div>
      })
    )(R.range(1,101));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Snake & Ladder Board - Flexbox</h1>
        </header>
        <div className="App-container">
          <div className='board'>
              {this.renderBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
