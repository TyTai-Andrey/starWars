import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_NAMES } from './constants/routeNames';
import { Main } from './page/Main';
import { WrongPage } from './page/WrongPage';
import './App.scss';

export const App = () => {
  const { main, wrongPage } = ROUTE_NAMES;

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path={main} element={<Main />} />
        <Route path={wrongPage} element={<WrongPage />} />
      </Routes>
    );
  };

  return renderRoutes();
};
