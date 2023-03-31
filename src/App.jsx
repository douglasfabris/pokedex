import { useState } from "react";
import Navbar from "./components/Navbar";
import PokemonCards from "./components/PokemonCards";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const getPreviousPage = (page) => {
    setPrevious(page);
  };

  const getNextPage = (page) => {
    setNext(page);
  };

  const setPreviousPage = () => {
    setCurrentPage(previous);
  };

  const setNextPage = () => {
    setCurrentPage(next);
  };

  return (
    <div>
      <Navbar setPreviousPage={previous ? setPreviousPage : null} setNextPage={next ? setNextPage : null} />
      <PokemonCards
        url={currentPage}
        getPreviousPage={getPreviousPage}
        getNextPage={getNextPage}
      />
    </div>
  );
}

export default App;
