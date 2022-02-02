import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../../../hooks/http.hook';

type PosterProps = {
  film: string;
};

export const Poster: React.FC<PosterProps> = ({ film }) => {
  const navigate = useNavigate();
  const { request } = useHttp();

  const [data, setData] = useState<any>({});

  const getHomeworld = async (
    path: string = 'https://swapi.dev/api/people/?page=1'
  ) => {
    const response = await request(path);
    const { title } = response || {};

    if (response) {
      setData({ ...data, title });
    }
  };

  useEffect(() => {
    getHomeworld(film);
  }, [film]);

  return (
    <div className="Poster" key={film}>
      <div className="Poster-title">{data?.title}</div>
      <div className="Poster-img">Типо постер фильма: {film}</div>
    </div>
  );
};
