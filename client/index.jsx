const App = () => (
  <div>
    <h1>Is it a Sandwich</h1>
    <h2>An oreo</h2>
    <button type="button">No</button>
    <button type="button">Yes</button>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


$.get('http://127.0.0.1:3000', x => console.log(x))
