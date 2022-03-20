import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return <p>have data</p>;
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
  };

  return <div>
    {/* {showData()} */}
  </div>;
};

export default PokemonList;
