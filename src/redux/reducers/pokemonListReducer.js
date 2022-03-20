const defaultState = {
  loading: false,
  errorMsg: "",
  data: [],
};

const pokemonListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "POKEMON_LIST_FAIl":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get pokemon",
      };

    default:
      return state;
  }
};

export default pokemonListReducer;
