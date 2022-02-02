type methodTypes = 'GET' | 'POST' | 'DELETE' | 'PUT';

type TooltipsReducerState = {
  peoples: IActor[];
  next: string | undefined;
  previous: string | undefined;
  countPeoples: number;
  countPagePeoples: number;
};

type AppState = {
  tooltipsReducer: TooltipsReducerState;
};
