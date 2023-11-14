import '../styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Login from './login/Login';
import ProductList from './product/ProductList';
import CartList from './cart/CartList';
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  const [Users, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('account.json')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log('error reading json', error));
  }, []);
  useEffect(() => {
    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilterProduct(data);
      })
      .catch((error) => console.log('error reading json', error));
  }, []);

  //sử lý hàm login
  const handleLogin = (checklogin) => {
    const userFound = Users.find((user) => user.username === checklogin.username && user.password === checklogin.password);
    if (userFound) {
      navigate('/home');
      toast.success("Login success!")
    } else {
      toast.error("Login failed, check username and password again!")
    }
    console.log('Logging in with:', checklogin);
  }
  //sử lý sự kiện add sản phẩm vào giỏ hàng
  const HandleAddProduct = (product) => {

  };

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <body>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductList products={filterProduct} addProduct={HandleAddProduct} />} />
          <Route path="/shoppingcart" element={<CartList />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </div>
  );
}

export default App;
