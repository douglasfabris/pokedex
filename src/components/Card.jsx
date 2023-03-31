/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Card.css"

function Card({ pokemon }) {

  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])
  const [image, setImage] = useState("")

  useEffect(() => {
    fetch(pokemon.url)
    .then(res => res.json())
    .then(poke => {
      setPokemonName(poke.name)
      setTypes(poke.types.map(type => type.type.name))
      setImage(poke.sprites.front_default)
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