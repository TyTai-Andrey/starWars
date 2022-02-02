import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';

import './AppHeader.scss';
import { ROUTE_NAMES } from '../../constants/routeNames';

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  const { main } = ROUTE_NAMES;

  return (
    <AppBar position="static" className="AppHeader">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          className="AppHeader-logo"
          onClick={() => navigate(main)}
        >
          MUI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
