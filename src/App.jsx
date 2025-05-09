import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext } from "react";
import Policy from "./Page/Policy";
import { Flex } from "antd";
import PolicyList from "./Page/PolicyList";
import axios from "axios";
import { PolicyProvider } from "./Context/PolicyContext";

import Insured from "./Page/Insured";
import Product from "./Page/Product";
import Holder from "./Page/Holder";

function App() {
  return (
    <Flex vertical className="App-body">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: 100, paddingBottom: 50 }}
        />
      </header>
      <PolicyProvider>
        <Flex vertical={false} justify="center" gap={6}>
          <div style={{ width: "50%" }}>
            <PolicyList />
          </div>
          <Policy />
          <Holder />
          <Insured />
          <Product />
        </Flex>
      </PolicyProvider>
    </Flex>
  );
}

export { App };
