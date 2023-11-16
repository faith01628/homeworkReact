import '../../styles/Profile.scss';
import { useNavigate } from 'react-router-dom';

const Profile = ({ clearLocal }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        clearLocal();
        navigate('/');
    };

    const handleUdate = () => {
        navigate('/updateprofile')
    }

    return (
        <>
            <div className="body">
                <div className='profile-container'>
                    <h1>Profile Page</h1>
                    <div className="profile-item">
                        <div className='box-left'>
                            <div className="avata">
                                <img src={localStorage.getItem('avata')} alt="avata" />
                            </div>
                            <div className="username">{localStorage.getItem('username')}</div>
                            <button className="editprofile" onClick={handleUdate}>Edit Profile</button>
                        </div>
                        <div className='box-right'>
                            <table>
                                <tr>
                                    <td className='key'>
                                        <span>Email: </span>
                                        <span>Phone: </span>
                                        <span>Birth day: </span>
                                        <span>Address: </span>
                                    </td>
                                    <td>
                                        <div className="email">{localStorage.getItem('email')}</div>
                                        <div className="phone">{localStorage.getItem('phone')}</div>
                                        <div className="Date_of_birth">{localStorage.getItem('Date_of_birth')}</div>
                                        <div className="address">{localStorage.getItem('address')}</div>
                                    </td>
                                </tr>
                            </table>
                            <button onClick={handleLogout}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
