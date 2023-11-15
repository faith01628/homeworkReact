import '../styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './nav/Nav';
import Home from './home/Home';
import Login from './login/Login';
import ProductList from './product/ProductList';
import CartList from './cart/CartList';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './footer/Footer';


function App() {

  const [Users, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [samsungProduct, setSamsungProduct] = useState([]);
  const [iphoneProduct, setIphoneProduct] = useState([]);

  useEffect(() => {
    fetch('account.json')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log('error reading json', error));

    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        const productSamsung = data;
        const productIphone = data;
        setProducts(data);
        setFilterProduct(data);
        setSamsungProduct(productSamsung.filter(p => p.brand === "samsung").slice(0, 2));
        setIphoneProduct(productIphone.filter(p => p.brand === "iphone").slice(0, 2));
      })
      .catch((error) => console.log('error reading json', error));
  }, []);

  //sử lý hàm login
  const handleLogin = (checklogin) => {
    const userFound = Users.find((user) => user.username === checklogin.username && user.password === checklogin.password);
    if (userFound) {
      navigate('/home');
      toast.success("Login success!")
      localStorage.setItem('username', checklogin.username);
    } else {
      toast.error("Login failed, check username and password again!")
    }
    console.log('Logging in with:', checklogin);
  }

  //sử lý sự kiện add sản phẩm vào giỏ hàng
  const HandleAddProduct = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      if (product.quantity - existingProduct.quantity > 0) {
        const updatedCart = cart.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCart);
        toast.success("Add to cart success");
      }
    } else {
      if (product.quantity > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      toast.success("Add to cart success");
    }

    // Kiểm tra và ẩn sản phẩm khi số lượng nó về 0
    const updatedProducts = products.map(item => {
      if (item.id === product.id && item.quantity === 0) {
        item.quantity = 0;
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  //sử lý sự kiện xóa sản phẩm trong giỏ hàng
  const HandleDelete = (id) => {
    const deleteProduct = cart.filter(cart => cart.id !== id);
    setCart(deleteProduct);
    console.log('check card', deleteProduct)
    toast.info("Delete product success!")
  }

  //sử lý sự kiện thanh toán
  const HandlePayNow = () => {
    // Tính tổng số tiền trong giỏ hàng
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log('check total', totalPrice)
    // Cập nhật số lượng sản phẩm sau khi thanh toán
    const updatedProducts = products.map(product => {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem) {
        product.quantity -= cartItem.quantity;
      }
      return product;
    });
    // Xóa toàn bộ sản phẩm khỏi giỏ hàng
    setCart([])
    // Cập nhật danh sách sản phẩm sau khi thanh toán
    setProducts(updatedProducts);
    // Hiển thị thông báo với tổng số tiền
    toast.success(`You have successfully paid the total amount of $${totalPrice}`);
    navigate('/product')
  }
  //xóa dữ liệu localStorage
  const deteteLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <div className="App">
      <nav>
        <Nav clearLocal={deteteLocalStorage} />
      </nav>
      <body>
        <Routes>
          <Route path="/home" element={localStorage.getItem('username') ? (
            <Home iphoneProduct={iphoneProduct} samsungProduct={samsungProduct} />
          ) : (<Navigate to="/" />)
          } />
          <Route path="/product" element={
            localStorage.getItem('username') ? (
              <>
                <ProductList products={filterProduct} addProduct={HandleAddProduct} />
              </>
            ) : (<Navigate to="/" />)
          } />
          <Route path="/shoppingcart" element={
            localStorage.getItem('username') ? (<CartList cart={cart} onDelete={HandleDelete} onPayNow={HandlePayNow} />
            ) : (<Navigate to="/" />)
          } />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
