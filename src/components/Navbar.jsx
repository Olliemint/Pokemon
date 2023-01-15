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
          <NavLink to="/video-games">Video Games</NavLink>
        </li>
        <li>
          <NavLink to="/trading-cards">Trading Cards</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon-tv">Pokemon TV</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon-events">Pokemon events</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
