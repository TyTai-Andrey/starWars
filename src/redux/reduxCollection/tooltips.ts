import { Reducer, ActionCreator } from 'redux';

enum TooltipsActionTypes {
  SET_SELECTED_VALUE = 'tooltips/SET_SELECTED_VALUE',
}

const initialState: TooltipsReducerState = {
  selectedValue: 'Главная',
};

type SetSelectedValueAction = {
  type: TooltipsActionTypes.SET_SELECTED_VALUE;
  selectedValue: string;
};

export const setSelectedValue: ActionCreator<SetSelectedValueAction> = (
  selectedValue: string
) => ({
  type: TooltipsActionTypes.SET_SELECTED_VALUE,
  selectedValue,
});

type TooltopsActions = SetSelectedValueAction;

export const tooltipsReducer: Reducer<TooltipsReducerState, TooltopsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TooltipsActionTypes.SET_SELECTED_VALUE:
      return {
        ...state,
        selectedValue: action.selectedValue,
      };
    default:
      return state;
  }
};
