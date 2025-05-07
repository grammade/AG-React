
import Grid from './Components/Grid';
import { createContext, useState } from 'react';

const GridContext = createContext();
function App() {

  
const [serverSide, setServerSide] = useState(false);
return (
    <GridContext.Provider value={{serverSide, setServerSide}}>
        <Grid/>
        <button className='button is-info m-3' 
            style={{alignSelf: 'flex-end'}}
            onClick={() => {console.log('test');setServerSide(!serverSide)}}>Set {!serverSide ? 'server' : 'client'} side</button>
    </GridContext.Provider>
);
}