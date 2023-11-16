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
import SearchName from './search/SearchName';
import SearchPrice from './search/SearchPrice';
import SearchProductType from './search/SearchProductType';
import Profile from './profile/Profile';
import EditProfile from './profile/EditProfile';



function App() {

  const [Users, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchName, setSeachName] = useState([]);
  const [samsungProduct, setSamsungProduct] = useState([]);
  const [iphoneProduct, setIphoneProduct] = useState([]);
  const [asusProduct, setAsusProduct] = useState([]);
  const navigate = useNavigate();

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
        const productAsus = data;
        setProducts(data);
        setFilterProduct(data);
        setSamsungProduct(productSamsung.filter(p => p.brand === "samsung").slice(0, 2));
        setIphoneProduct(productIphone.filter(p => p.brand === "iphone").slice(0, 2));
        setAsusProduct(productAsus.filter(p => p.brand === "asus").slice(0, 2));
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
      localStorage.setItem('avata', userFound.avata);
      localStorage.setItem('email', userFound.email);
      localStorage.setItem('address', userFound.address);
      localStorage.setItem('phone', userFound.phone);
      localStorage.setItem('Date_of_birth', userFound.Date_of_birth);
    } else {
      toast.error("Login failed, check username and password again!")
    }
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

  //search theo tên 
  const hanldeSearchByName = (value) => {
    setSeachName(value);
    const dataSearchName = products.filter(pro => pro.name.toLowerCase().includes(value.toLowerCase()));
    setFilterProduct(dataSearchName);
  }

  //search theo giá 
  const HandleSearchByPrice = (searchPrice) => {
    const minPriceValue = parseFloat(searchPrice.min);
    const maxPriceValue = parseFloat(searchPrice.max);
    if (isNaN(minPriceValue) || isNaN(maxPriceValue)) {
      toast.warning("product cannot be left blank");
    } else if (minPriceValue > maxPriceValue) {
      toast.warning("The min value cannot be greater than the max value");
    } else if (minPriceValue != null && maxPriceValue !== null) {
      const filterPrice = filterProduct.filter(product => {
        const productPrice = parseFloat(product.price);
        return productPrice >= minPriceValue && productPrice <= maxPriceValue;
      });
      setFilterProduct(filterPrice);
    }
  }

  //search theo loại sản phẩm
  const hanldeSearchByProdcutType = (ProductType) => {
    if (ProductType !== '') {
      const filterProductType = products.filter(product => ProductType === product.product_type);
      setFilterProduct(filterProductType);
    } else {
      setFilterProduct(products);
    }

  }

  const HandleUpdateProfile = () => {

  }

  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <div>
        <Routes>
          <Route path="/home" element={localStorage.getItem('username') ? (
            <Home iphoneProduct={iphoneProduct} samsungProduct={samsungProduct} asusProduct={asusProduct} addProduct={HandleAddProduct} />
          ) : (<Navigate to="/" />)
          } />
          <Route path="/product" element={
            localStorage.getItem('username') ? (
              <>
                <SearchProductType ProductType={hanldeSearchByProdcutType} />
                <SearchPrice searchPrice={HandleSearchByPrice} />
                <SearchName onSearch={hanldeSearchByName} searchName={searchName} />
                <ProductList products={filterProduct} addProduct={HandleAddProduct} />
              </>) : (<Navigate to="/" />)} />
          <Route path="/shoppingcart" element={localStorage.getItem('username') ? (<CartList cart={cart} onDelete={HandleDelete} onPayNow={HandlePayNow} />) : (<Navigate to="/" />)} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={localStorage.getItem('username') ? (<Profile clearLocal={deteteLocalStorage} />) : (<Navigate to="/" />)} />
          <Route path="/updateprofile" element={localStorage.getItem('username') ? (<EditProfile updateLocal={HandleUpdateProfile} />) : (<Navigate to="/" />)} />
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
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
