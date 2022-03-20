import pokemonListReducer from "../reducers/pokemonListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
});

export default rootReducer;
