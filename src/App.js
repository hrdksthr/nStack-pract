import React from 'react';
import './App.css';
import { Layout } from "antd";
import Routes from 'Routes';

function App() {
  return (
    <div >
      <Layout style={{ background: "#f8f8f8"}}>
          <Routes />
      </Layout>
    </div>
  );
}

export default App;
