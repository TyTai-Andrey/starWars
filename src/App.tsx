import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_NAMES } from './constants/routeNames';
import { Main } from './page/Main';
import { WrongPage } from './page/WrongPage';
import './App.scss';
import { ActorPage } from './page/ActorPage';
import { AppHeader } from './components/AppHeader';

export const App = () => {
  const { main, wrongPage, actor } = ROUTE_NAMES;

  const renderRoutes = () => {
    return (
      <>
        <AppHeader />
        <div className="conteiner">
          <Routes>
            <Route path={main} element={<Main />} />
            <Route path={actor} element={<ActorPage />} />
            <Route path={wrongPage} element={<WrongPage />} />
          </Routes>
        </div>
      </>
    );
  };

  return renderRoutes();
};
