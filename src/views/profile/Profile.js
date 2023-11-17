import '../../styles/Profile.scss';
import { useNavigate } from 'react-router-dom';

const Profile = ({ clearLocal }) => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const userAvata = user.avata;
    const userEmail = user.email;
    const userPhone = user.phone;
    const userBirthday = user.date_of_birth;
    const userAddress = user.address;

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
                                <img src={userAvata} alt="avata" />
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
                                        <div className="email">{userEmail}</div>
                                        <div className="phone">{userPhone}</div>
                                        <div className="date_of_birth">{userBirthday}</div>
                                        <div className="address">{userAddress}</div>
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
