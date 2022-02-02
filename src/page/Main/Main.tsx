import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../constants/constants';
import { useHttp } from '../../hooks/http.hook';
import {
  setCountPagePeoples,
  setCountPeoples,
  setNextPagePeoples,
  setPeoples,
  setPreviousPagePeoples,
} from '../../redux/reduxCollection/tooltips';
import { TableRow } from './components';

import './Main.scss';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const { peoples, next, previous, countPeoples, countPagePeoples } =
    useSelector((state: AppState) => state.tooltipsReducer);

  const getPeoples = async (
    path: string = 'https://swapi.dev/api/people/?page=1'
  ) => {
    const response = await request(path);

    const { count, next, previous, results } = response || {};

    if (response) {
      dispatch(setPeoples(results));
      dispatch(setCountPeoples(count));
      dispatch(setNextPagePeoples(next));
      dispatch(setPreviousPagePeoples(previous));
    }
  };

  useEffect(() => {
    !peoples.length && getPeoples();
  }, []);

  const renderButton = (num: number) => (
    <button
      className="Main-navTable-button button--small"
      key={num}
      disabled={countPagePeoples === num}
      onClick={() => {
        if (countPagePeoples !== num) {
          dispatch(setCountPagePeoples(num));
          getPeoples(`https://swapi.dev/api/people/?page=${num}`);
        }
      }}
    >
      {num}
    </button>
  );

  const buttons = useMemo(() => {
    if (!countPeoples) return null;
    let buttons = [];

    let i = 10;

    while (countPeoples > i) {
      const num = i / 10;
      buttons.push(renderButton(num));
      i += 10;
    }
    buttons.push(renderButton(i / 10));

    return buttons;
  }, [countPeoples, countPagePeoples]);

  return (
    <div className="Main">
      <div className="Main-wrapper">
        <div className="Main-table">
          <div className="Main-table-row">
            <div className="Main-table-row-item item--name title">
              Имя персонажа
            </div>
            <div className="Main-table-row-item item--homeworld title">
              Планета
            </div>
            <div className="Main-table-row-item item--films title">
              Количество фильмов
            </div>
          </div>
          {peoples.map((people: IActor) => (
            <TableRow people={people} key={people.name} />
          ))}
        </div>
        <div className="Main-navTable">
          <button
            className="Main-navTable-button button--big"
            disabled={!previous}
            onClick={() => {
              previous && getPeoples(previous);
              previous && dispatch(setCountPagePeoples(countPagePeoples - 1));
            }}
          >
            Назад
          </button>
          {buttons}
          <button
            className="Main-navTable-button button--big"
            disabled={!next}
            onClick={() => {
              next && getPeoples(next);
              next && dispatch(setCountPagePeoples(countPagePeoples + 1));
            }}
          >
            Вперёд
          </button>
        </div>
      </div>
    </div>
  );
};
