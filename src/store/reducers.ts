import { ActionTypes, RootState } from './types';

const initialState: RootState = { searchTerms: [] };

function RootReducer(state = initialState, action: ActionTypes): RootState {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return { ...state, searchTerms: action.terms };
    default:
      return state;
  }
}

export default RootReducer;
