import React from "react";
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
