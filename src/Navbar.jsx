import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { useEffect, useState } from "react";


export default function Navbar(props) {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSetDarckTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    defaultTheme && setIsDarkTheme(true);
  }, [])


  useEffect(() => {
    isDarkTheme ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
  }, [isDarkTheme])

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button className="theme-switcher" onClick={handleSetDarckTheme}>{isDarkTheme ? "Dark" : "Light"}</Button>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}