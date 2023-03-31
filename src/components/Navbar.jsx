import "./Navbar.css"

function Navbar(props) {

  return ( 
    <div className="navbar">
      <h1>Pokedex</h1>
      <div>
        {props.setPreviousPage && <button type="button" onClick={props.setPreviousPage}>Página anterior</button>}
        {props.setNextPage && <button type="button" onClick={props.setNextPage}>Próxima página</button>}
      </div>
    </div>
   );
}

export default Navbar;