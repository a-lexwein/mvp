import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {sandwich: {name:'ham and cheese on rye', id: 0} }
  }

  render() {
    return (
      <div>
        <h1>Is it a Sandwich</h1>
        <h2>{this.state.sandwich.name}</h2>
        <button type="button" onClick={this.vote.bind(null, this.state.sandwich.id, 'N')}>No</button>
        <button type="button" onClick={this.vote.bind(null, this.state.sandwich.id, 'Y')}>Yes</button>
      </div>
    )
  }

  getNewSandwich() {
    $.get('http://127.0.0.1:3000', x => {
      console.log(x);
      this.setState({sandwich: JSON.parse(x)})
    });
  }

  vote(sandoId, vote) {
    $.post(`http://127.0.0.1:3000/data/${sandoId}-${vote}`);
    this.getNewSandwich();
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
