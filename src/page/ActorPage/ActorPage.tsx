import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';

import './ActorPage.scss';
import { Poster } from './components/Poster';

export const ActorPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>({});

  const { request } = useHttp();

  const getPeoples = async (
    path: string = `https://swapi.dev/api/people/${id}/`
  ) => {
    const response: IActor = await request(path);
    const { name, films } = response || {};
    if (response) {
      setData({ ...data, name, films });
    }
  };

  useEffect(() => {
    getPeoples();
  }, []);

  return (
    <div className="ActorPage">
      <div className="ActorPage-top">
        <div className="ActorPage-top-title">{data.name}</div>
        <div className="ActorPage-top-img">
          <img src="https://i.playground.ru/p/sMRzxqyo6BQD4CE5VPaEMg.jpeg" />
        </div>
      </div>
      <div className="ActorPage-bottom">
        {data?.films?.map((film: string, idx: number) => {
          if (idx > 2) return null;
          return <Poster film={film} key={film} />;
        })}
      </div>
    </div>
  );
};
