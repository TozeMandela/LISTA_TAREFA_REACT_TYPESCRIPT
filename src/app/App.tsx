import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Head } from './shared/components/Head';
import Global from  './shared/styles/global';
import { Routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <Head/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
