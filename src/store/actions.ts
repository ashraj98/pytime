import { ActionTypes, UPDATE_SEARCH } from './types';

class RootActions {
  static UpdateSearchQuery(terms: string[]): ActionTypes {
    return { type: UPDATE_SEARCH, terms };
  }
}

export default RootActions;
