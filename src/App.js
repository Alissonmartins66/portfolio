import React from 'react';
import FirstFold from './components/Folds/FirstFold';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout';
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Layout>
      <Header />
      <FirstFold />
    </Layout>  
    </>
  );
}

export default App;
