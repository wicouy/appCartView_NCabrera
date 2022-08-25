import { Link , NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/Pizzas">Las Pizzas</NavLink>
        <NavLink to="/categoria/LoQueSeNosCantaElOGT">Lo Que Se Nos Canta El OGT </NavLink>
        <NavLink to="/cart">
          <span >
          <CartWidget/>
          <img className="CarritoLogo" src={'rsz_carrito-min.png'}/> 
          </span>
        </NavLink>
      </nav>
    )
  } else {
    return (
      <nav>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
      </nav>
    )
  }

}

export default Nav