import { combineReducers } from 'redux';
import fetchConfig from './fetchConfig';
import genre from './genre';

export default combineReducers({ fetchConfig, genre });
