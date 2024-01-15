import Home from './pages/Home/Home';
import './App.css';
import { Route,Routes } from 'react-router';
import Catalog from './pages/Catalog/Catalog';
import {Layout} from './components';
import NotFound from './pages/NotFound/NotFound';
import React, { Suspense } from 'react';
import { useAppSelector } from './hooks/hooks';
import Loadable from 'react-loadable';
import CartLoader from './pages/Cart/Loader/Loader';


const App:React.FC =() =>{
  localStorage.cart || localStorage.setItem('cart', '')
  localStorage.totalPrice ||  localStorage.setItem('totalPrice', '0')  
  const {scrollLock} = useAppSelector(state=>state.cart)

  const Cart = Loadable({
    loader: () => import(/*webpackChunkName:'Cart'*/'./pages/Cart/Cart'),
    loading: () => <CartLoader />  
  })

  return (
    <div className={scrollLock ? 'scroll_lock' : undefined}>
      <Suspense>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>    
        </Suspense>
    </div>
  );
}

export default App;
