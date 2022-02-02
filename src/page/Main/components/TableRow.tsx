import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';

type TableRowProps = {
  people: IActor;
};

export const TableRow: React.FC<TableRowProps> = ({ people }) => {
  const navigate = useNavigate();
  const { request } = useHttp();

  const [homeworldName, setHomeworldName] = useState<string>('');

  const getHomeworld = async (
    path: string = 'https://swapi.dev/api/people/?page=1'
  ) => {
    const response = await request(path);
    const { name } = response || {};
    if (name) {
      setHomeworldName(name);
    }
  };

  useEffect(() => {
    getHomeworld(people.homeworld);
  }, [people.homeworld]);

  const goToActor = () => {
    const peopleUrlSplit = people.url.split('/');
    const peopleID = peopleUrlSplit[peopleUrlSplit.length - 2];
    navigate(`/actor/${peopleID}`);
  };

  return (
    <div className="Main-table-row" key={people.name}>
      <div className="Main-table-row-item item--name" onClick={goToActor}>
        {people.name}
      </div>
      <div className="Main-table-row-item item--homeworld">{homeworldName}</div>
      <div className="Main-table-row-item item--films">
        {people.films.length}
      </div>
    </div>
  );
};
