import logo from './logo.svg';
import './App.css';

function App() {
  var person  = {
    name :" De. Sha",

    job:"Singer"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Make done <code>src/App.js</code> and save to reload.
        </p>
        <p>My First React Paragraph </p>
        <h1> My Heading is : {person.name +" "+ person.job}</h1>
      </header>
    </div>
  );
}

export default App;
