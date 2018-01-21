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

  renderTips() {
    return  <div className="tips">
      <h3> Its Simple </h3>
      <ul>
        <li>Render boxes 1 to 100. 10 boxes in a row.</li>
        <li>Color alternate box differently. css :nth-child(even)</li>
        <li>Reverse even rows. flex-direction: row-reverse;</li>
        <li>Flip the board. transform: scale(1, -1);</li>
        <li>Flip the boxes. transform: scale(1, -1);</li>
      </ul>
      <h3> Thats it. </h3>
    </div>;
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
        {this.renderTips()}
      </div>
    );
  }
}

export default App;
