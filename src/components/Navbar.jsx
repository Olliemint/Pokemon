import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
    </div>
  );
}

export default Navbar
