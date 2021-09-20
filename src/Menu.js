import React from "react";
import { NavLink } from "react-router-dom";    {/* stap - 17*/}

const Menu = () => {
    return (
    <>
        <h3>useing react-router0dom</h3>
        <NavLink activeClassName="active_class" to="/">About us</NavLink>    {/* stap -119 */}
        <NavLink to="/contact">Contact Us</NavLink>  {/* stap -17 */} {/* stap -18 aab Navlink use kiya jata hai  */}
        <br />
        <h3>useing simple router</h3>
        <a href="/">AboutUs</a>            {/* stap -14 */}
        <a href="/contact">Contact</a>
    </>
    )
}

export default Menu;