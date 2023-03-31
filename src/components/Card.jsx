import { useEffect, useState } from "react";
import "./Card.css"

function Card({ pokemon }) {

  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])
  const [image, setImage] = useState("")

  useEffect(() => {
    fetch(pokemon.url)
    .then(res => res.json())
    .then(pokemon => {
      setPokemonName(pokemon.name)
      setTypes(pokemon.types.map(type => type.type.name))
      setImage(pokemon.sprites.front_default)
    })
    }, [])

  return ( 
    <div className="card">
      <img src={image} alt={pokemonName}/>
      <p className="pokemon">{pokemonName}</p>
      {types.map(e => <p>{e}</p>)}
    </div>
   );
}

export default Card;