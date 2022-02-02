import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedValue } from '../../redux/reduxCollection/tooltips';

import './Main.scss';

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedValue } = useSelector(
    (state: AppState) => state.tooltipsReducer
  );

  return <div className="Main"></div>;
};
