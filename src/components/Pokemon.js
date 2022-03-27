import React, { useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../redux/actions/pokemonActions";

const Pokemon = (props) => {
  const pokemonName = "pikachu";
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokemonData = pokemonState.data[pokemonName];

      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokemonData.sprites.front_default} alt="" />
            <img src={pokemonData.sprites.back_default} alt="" />
            <img src={pokemonData.sprites.front_shiny} alt="" />
            <img src={pokemonData.sprites.back_shiny} alt="" />
          </div>
          <div className={"item"}>
            <h1>Stats</h1>
            {pokemonData.stats.map((stat) => (
              <p>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
          <div className={"item"}>
            <h1>Abilities</h1>
            {pokemonData.abilities.map((ability) => (
              <p>{ability.ability.name}</p>
            ))}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>loading</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>Error getting pokemon</p>;
  };

  return (
    <div className={"poke"}>
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  );
};

export default Pokemon;
