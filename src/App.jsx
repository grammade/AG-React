import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { createContext, useState } from 'react';
import PolicyPage from './Page/PolicyPage';

const GridContext = createContext();

function App() {

  
  const [serverSide, setServerSide] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height:100, paddingBottom:50}}/>
      </header>
      <div className="App-body">
        <PolicyPage/>
      </div>
    </div>
  );
}

export {App, GridContext};
