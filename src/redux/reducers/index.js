import { combineReducers } from 'redux';
import fetchConfig from './fetchConfig';
import pickGenre from './pickGenre';
import pickSubgenre from './pickSubgenre';

export default combineReducers({ fetchConfig, pickGenre, pickSubgenre });
