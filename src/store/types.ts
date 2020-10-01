export const UPDATE_SEARCH = 'UPDATE_SEARCH';

interface UpdateSearchAction {
  type: typeof UPDATE_SEARCH
  terms: string[]
}

export type ActionTypes = UpdateSearchAction;

export interface RootState {
  searchTerms: string[];
}
