import { useEffect, useState } from "react";
import Card from "./Card";
import "./PokemonCards.css"

function PokemonCards (props) {
  const {url, getPreviousPage, getNextPage} = props
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(allPokemon => {
      setLoading(false)
      setPokemon(allPokemon.results.map(p => p))
      getNextPage(allPokemon.next)
      getPreviousPage(allPokemon.previous)
    })
  }, [url])

  if (loading) return (
    <h1>Loading</h1>
  )

  return (
    <div className="grid">
      {pokemon.map(p => (
      <Card pokemon={p} key={p.name}/>
    ))}
    </div>
   );
}

export default PokemonCards ;