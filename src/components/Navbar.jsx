/* eslint-disable react/prop-types */
import "./Navbar.css"
import logo from"../assets/Pokédex_logo.png"

function Navbar(props) {
  const { setPreviousPage, setNextPage} = props
  return ( 
    <div className="navbar">
      <img src={logo} alt="logo" height={100} />
      <div>
        {setPreviousPage && <button type="button" onClick={setPreviousPage}>Página anterior</button>}
        {setNextPage && <button type="button" onClick={setNextPage}>Próxima página</button>}
      </div>
    </div>
   );
}

export default Navbar;