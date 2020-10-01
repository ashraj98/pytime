import { createStore } from 'redux';
import RootActions from './actions';
import RootReducer from './reducers';

const RootStore = createStore(RootReducer);

export {
  RootActions,
  RootStore,
};
