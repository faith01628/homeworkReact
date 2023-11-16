import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
    const [birthday, setBirthday] = useState(localStorage.getItem('Date_of_birth') || '');
    const [address, setAddress] = useState(localStorage.getItem('address') || '');
    const [avata, setAvata] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const handleAddressChange = (event) => {
        const newAddress = event.target.value;
        setAddress(newAddress);
    };

    const handlePhoneChange = (event) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
    };

    const handleBirthdayChange = (event) => {
        const newBirthday = event.target.value;
        setBirthday(newBirthday);
    };
    const handleImgChange = (event) => {
        const newImg = event.target.value;
        setAvata(newImg)
    }

    const handleUpdate = () => {
        const updatedAvata = avata.trim() !== '' ? avata : localStorage.getItem('avata') || '';
        // Cập nhật dữ liệu vào localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('Date_of_birth', birthday);
        localStorage.setItem('address', address);
        localStorage.setItem('avata', updatedAvata);


        // Chuyển hướng đến trang profile
        navigate('/profile');
        toast.success("Update profile successfully")
    };

    useEffect(() => {
        // Hành động nếu có thay đổi trong state
        // (có thể làm gì đó nếu cần thiết)
    }, [email, phone, birthday, address]);

    return (
        <>
            <div className="body">
                <div className='profileEdit-container'>
                    <h1>Update Profile</h1>
                    <div className="profile-item">
                        <div className="avata">
                            <img src={localStorage.getItem('avata')} alt="avata" />
                        </div>
                        <div className="username">{localStorage.getItem('username')}</div>
                        <div>
                            <input value={avata} placeholder='Enter your link img' onChange={handleImgChange} />
                        </div>
                        <div className='email'>
                            <input value={email} placeholder='Enter your email' onChange={handleEmailChange} />
                        </div>
                        <div className='phone'>
                            <input value={phone} placeholder='Enter your phone' onChange={handlePhoneChange} />
                        </div>
                        <div className='birthday'>
                            <input value={birthday} placeholder='Enter your birthday' onChange={handleBirthdayChange} />
                        </div>
                        <div className='address'>
                            <input value={address} placeholder='Enter your address' onChange={handleAddressChange} />
                        </div>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
