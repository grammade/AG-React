import logo from './logo.svg';
import './App.css';
import Grid from './Components/Grid';
import { createContext, useState } from 'react';
import Policy from './Page/Policy';
import { Flex } from 'antd';
import PolicyList from './Page/PolicyList';

const GridContext = createContext();

function App() {
  const [serverSide, setServerSide] = useState(false);
  return (
    <Flex vertical className='App-body'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: 100, paddingBottom: 50 }} />
      </header>
      <Flex vertical={false} justify='space-between'>
        <PolicyList />
        <Policy />
      </Flex>
    </Flex>
  );
}

export { App, GridContext };
