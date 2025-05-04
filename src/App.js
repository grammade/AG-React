import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height:100, paddingBottom:50}}/>
        <Grid/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
