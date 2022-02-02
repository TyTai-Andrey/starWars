//
interface IActor {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface IPlanet {
  climate: string;
  created: Date;
  diameter: number;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: number;
  population: string;
  residents: string[];
  rotation_period: number;
  surface_water: string;
  terrain: string;
  url: string;
}
