import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { createContext, useState } from 'react';

const GridContext = createContext();

function App() {

  
  const [serverSide, setServerSide] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height:100, paddingBottom:50}}/>
      </header>
      <div className="App-body">
        <GridContext.Provider value={{serverSide, setServerSide}}>
          <Grid/>
          <button className='button m-3' 
            style={{alignSelf: 'flex-end'}}
            onClick={() => {console.log('test');setServerSide(!serverSide)}}>Toggle Server Side</button>
        </GridContext.Provider>
      </div>
    </div>
  );
}

export {App, GridContext};
