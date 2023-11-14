import { Route, Routes } from 'react-router-dom';
import '../style/App.scss';
import Nav from './nav/Nav';
import Home from './home/Home';
import Login from './login/Login';
import ProductList from './product/ProductList';
import CartList from './cart/CartList';
function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <body>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/shoppingcart" element={<CartList />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
