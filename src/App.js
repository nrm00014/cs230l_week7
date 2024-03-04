import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>CS 230L</h1>
    <h2>Section-002</h2>
    <p>WVU ID: 800373566</p>
    <p>Hi I am Nathan Mauzy</p>
    <div className = "container">
    <Card />
    </div>
    </div>
  );
}

export default App;
