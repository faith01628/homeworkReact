import { NavLink } from "react-router-dom";
import '../../styles/Nav.scss'

const Nav = ({ checklogin, clearLocal }) => {
    return (
        <>
            <div>
                <div className="topnav">
                    <NavLink to="/home" exact={true}>Home</NavLink>
                    <NavLink to="/product" >Product</NavLink>
                    <NavLink to="/shoppingcart" >Cart</NavLink>
                    {
                        localStorage.getItem('username', checklogin) ? (
                            <>
                                <span>
                                    hello {localStorage.getItem('username')}
                                </span>
                                <NavLink to="/" onClick={clearLocal} >Logout</NavLink>
                            </>
                        )
                            : (<NavLink to="/" >Login</NavLink>)}
                </div>
            </div >
        </>
    )
}
export default Nav;