import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { ROUTES } from './helpers/routes';

function App() {
  const routes = useRoutes(ROUTES)
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
