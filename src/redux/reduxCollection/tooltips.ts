import { Reducer, ActionCreator } from 'redux';

enum TooltipsActionTypes {
  SET_PEOPLES = 'tooltips/SET_PEOPLES',
  SET_NEXT_PAGE_PEOPLES = 'tooltips/SET_NEXT_PAGE_PEOPLES',
  SET_PREVIOUS_PAGE_PEOPLES = 'tooltips/SET_PREVIOUS_PAGE_PEOPLES',
  SET_COUNT_PEOPLES = 'tooltips/SET_COUNT_PEOPLES',
  SET_COUNT_PAGE_PEOPLES = 'tooltips/SET_COUNT_PAGE_PEOPLES',
}

const initialState: TooltipsReducerState = {
  peoples: [],
  next: undefined,
  previous: undefined,
  countPeoples: 0,
  countPagePeoples: 1,
};

type SetCountPagePeoplesAction = {
  type: TooltipsActionTypes.SET_COUNT_PAGE_PEOPLES;
  countPagePeoples: number;
};

export const setCountPagePeoples: ActionCreator<SetCountPagePeoplesAction> = (
  countPagePeoples: number
) => ({
  type: TooltipsActionTypes.SET_COUNT_PAGE_PEOPLES,
  countPagePeoples,
});

type SetCountPeoplesAction = {
  type: TooltipsActionTypes.SET_COUNT_PEOPLES;
  countPeoples: number;
};

export const setCountPeoples: ActionCreator<SetCountPeoplesAction> = (
  countPeoples: number
) => ({
  type: TooltipsActionTypes.SET_COUNT_PEOPLES,
  countPeoples,
});

type SetPreviousPagePeoplesAction = {
  type: TooltipsActionTypes.SET_PREVIOUS_PAGE_PEOPLES;
  previous: string | undefined;
};

export const setPreviousPagePeoples: ActionCreator<
  SetPreviousPagePeoplesAction
> = (previous: string | undefined) => ({
  type: TooltipsActionTypes.SET_PREVIOUS_PAGE_PEOPLES,
  previous,
});

type SetNextPagePeoplesAction = {
  type: TooltipsActionTypes.SET_NEXT_PAGE_PEOPLES;
  next: string | undefined;
};

export const setNextPagePeoples: ActionCreator<SetNextPagePeoplesAction> = (
  next: string | undefined
) => ({
  type: TooltipsActionTypes.SET_NEXT_PAGE_PEOPLES,
  next,
});

type SetPeoplesAction = {
  type: TooltipsActionTypes.SET_PEOPLES;
  peoples: IActor[];
};

export const setPeoples: ActionCreator<SetPeoplesAction> = (
  peoples: IActor[]
) => ({
  type: TooltipsActionTypes.SET_PEOPLES,
  peoples,
});

type TooltopsActions =
  | SetPeoplesAction
  | SetNextPagePeoplesAction
  | SetPreviousPagePeoplesAction
  | SetCountPeoplesAction | SetCountPagePeoplesAction;
export const tooltipsReducer: Reducer<TooltipsReducerState, TooltopsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TooltipsActionTypes.SET_COUNT_PAGE_PEOPLES:
      return {
        ...state,
        countPagePeoples: action.countPagePeoples,
      };
      case TooltipsActionTypes.SET_COUNT_PEOPLES:
        return {
          ...state,
          countPeoples: action.countPeoples,
        };
    case TooltipsActionTypes.SET_PREVIOUS_PAGE_PEOPLES:
      return {
        ...state,
        previous: action.previous,
      };
    case TooltipsActionTypes.SET_NEXT_PAGE_PEOPLES:
      return {
        ...state,
        next: action.next,
      };
    case TooltipsActionTypes.SET_PEOPLES:
      return {
        ...state,
        peoples: action.peoples,
      };
    default:
      return state;
  }
};
