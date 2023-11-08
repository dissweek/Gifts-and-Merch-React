import Home from './pages/Home/Home';
import './App.css';
import { Route,Routes } from 'react-router';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import NotFound from './pages/NotFound/NotFound';


function App() {
  localStorage.cart || localStorage.setItem('cart', '')
  localStorage.totalPrice ||  localStorage.setItem('totalPrice', '0')  
  const {scrollLock} = useSelector(state=>state.cart)

  return (
    <div className={scrollLock ? 'scroll_lock' : undefined}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>    
    </div>
  );
}

export default App;
