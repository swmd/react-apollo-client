import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import authentication from './authentication';

const rootReducer = combineReducers({
  authentication,
  toastr: toastrReducer,
});

export default rootReducer;
