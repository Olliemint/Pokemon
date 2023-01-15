import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">Pokédex</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">Video Games</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">Trading Cards</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">Pokemon TV</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">Pokemon events</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon">News</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
