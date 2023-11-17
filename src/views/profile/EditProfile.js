import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const userAvata = user.avata || '';
    const userEmail = user.email || '';
    const userPhone = user.phone || '';
    const userBirthday = user.date_of_birth || '';
    const userAddress = user.address || '';

    const [email, setEmail] = useState(userEmail);
    const [phone, setPhone] = useState(userPhone);
    const [birthday, setBirthday] = useState(userBirthday);
    const [address, setAddress] = useState(userAddress);
    const [avata, setAvata] = useState('');
    const navigate = useNavigate();

    //sử lý dữ liệu nhập từ input
    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handleUpdate = () => {
        const updatedAvata = avata.trim() !== '' ? avata : userAvata || '';

        const updatedUser = { email, phone, date_of_birth: birthday, address, avata: updatedAvata };
        localStorage.setItem("user", JSON.stringify(updatedUser));


        // Chuyển hướng đến trang profile
        navigate('/profile');
        toast.success("Update profile successfully")
    };

    useEffect(() => {
        // Hành động nếu có thay đổi trong state
        // (có thể làm gì đó nếu cần thiết)
    }, [email, phone, birthday, address, avata]);

    return (
        <>
            <div className='profileEdit-container'>
                <h1>Update Profile</h1>
                <div className="profile-item">
                    <div className="avata">
                        <img src={userAvata} alt="avata" />
                    </div>
                    <div className="username">{localStorage.getItem('username')}</div>
                    <div>
                        <input value={avata} placeholder='Enter your link img' onChange={(e) => handleInputChange(e, setAvata)} />
                    </div>
                    <div className='email'>
                        <input value={email} placeholder='Enter your email' onChange={(e) => handleInputChange(e, setEmail)} />
                    </div>
                    <div className='phone'>
                        <input value={phone} placeholder='Enter your phone' onChange={(e) => handleInputChange(e, setPhone)} />
                    </div>
                    <div className='birthday'>
                        <input value={birthday} placeholder='Enter your birthday' onChange={(e) => handleInputChange(e, setBirthday)} />
                    </div>
                    <div className='address'>
                        <input value={address} placeholder='Enter your address' onChange={(e) => handleInputChange(e, setAddress)} />
                    </div>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
