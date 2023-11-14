import { NavLink } from "react-router-dom";
import '../../style/Nav.scss'
const Nav = () => {
    return (
        <>
            <div>
                <div className="topnav">
                    <NavLink to="/home" exact={true}>Home</NavLink>
                    <NavLink to="/product" >Product</NavLink>
                    <NavLink to="/shoppingcart" >Cart</NavLink>
                    <NavLink to="/Login" >Login</NavLink>
                </div>
            </div>
        </>
    )
}
export default Nav;