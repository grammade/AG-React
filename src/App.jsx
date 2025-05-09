import logo from './logo.svg';
import './App.css';
import { createContext, useEffect } from 'react';
import Policy from './Page/Policy';
import { Flex } from 'antd';
import PolicyList from './Page/PolicyList';
import axios from 'axios';
import Insured from './Page/Insured';
import Product from './Page/Product';
import Holder from './Page/Holder';

const GridContext = createContext();

function App() {
  return (
    <Flex vertical className='App-body'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: 100, paddingBottom: 50 }} />
      </header>
      <Flex vertical={false} justify='flex-start' gap={6}>
        <div style={{width:'50%'}}>
          <PolicyList/>
        </div>
        <Policy />
        <Holder />
        <Insured/>
        <Product/>
      </Flex>
    </Flex>
  );
}

export { App, GridContext };
