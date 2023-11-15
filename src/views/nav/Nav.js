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
                                <NavLink to="/" onClick={clearLocal} >Logout</NavLink>
                                <span className="info-user">
                                    hello {localStorage.getItem('username')}
                                    <img className="avata" src={localStorage.getItem('avata')} alt="avata" />
                                </span>
                            </>
                        ) : (<NavLink to="/" >Login</NavLink>)}
                </div>
            </div >
        </>
    )
}
export default Nav;