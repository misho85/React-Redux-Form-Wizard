import { combineReducers } from 'redux';
import fetchConfig from './fetchConfig';
import pickGenre from './pickGenre';
import pickSubgenre from './pickSubgenre';
import infoForm from './infoForm';
import addSubgenre from './addSubgenre';

export default combineReducers({
  fetchConfig,
  pickGenre,
  pickSubgenre,
  infoForm,
  addSubgenre
});
