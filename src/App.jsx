import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { createContext, useState } from 'react';

const GridContext = createContext();

function App() {

  
  const [serverSide, setServerSide] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height:100, paddingBottom:50}}/>
      </header>
      <div className="App-body">
        <GridContext.Provider value={{serverSide, setServerSide}}>
          <Grid/>
          <button className='button is-info m-3' 
            style={{alignSelf: 'flex-end'}}
            onClick={() => {console.log('test');setServerSide(!serverSide)}}>Set {!serverSide ? 'server' : 'client'} side</button>
        </GridContext.Provider>
      </div>
    </div>
  );
}

export {App, GridContext};
