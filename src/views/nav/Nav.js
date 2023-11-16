import { NavLink, useNavigate } from "react-router-dom";
import '../../styles/Nav.scss'

const Nav = ({ checklogin, clearLocal }) => {
    const navigate = useNavigate();
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
                                <span className="info-user" onClick={() => navigate('/profile')}>
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