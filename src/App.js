import logo from './logo.svg';
import './App.css';
import MapaTulua from './MapaTulua';
import Login from './Login';
import Material from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gasolineras de Tulua</h1>
        <Login />
        <MapaTulua />
      </header>
    </div>
  );
}

export default App;
