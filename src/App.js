import './App.css';
import React from 'react';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
      </div>
    );
  }
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        HELLO WORLD!
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
