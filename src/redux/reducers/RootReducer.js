import pokemonListReducer from "../reducers/pokemonListReducer";
import pokemonMultipleReducer from "../reducers/pokemonMultipleReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: pokemonMultipleReducer,
});

export default rootReducer;
