import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Route,Routes } from 'react-router';
import Catalog from './pages/Catalog/Catalog';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function App() {

  return (
    <>
      <Header />
      <Routes path='/' element={<Home />} >
        <Route index element={<Home />} />
        <Route path='catalog' element={<Catalog />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
