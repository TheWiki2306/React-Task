import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Axios from 'axios';
import Header from "./components/header/header";
import Home from "./components/Home/Home";
import Categories from "./components/categories/Clothes";
import Account from "./components/Account/Account";
import Cart from "./components/cart/Cart";
import ExistingAccount from "./components/Existing account/ExistingAccount";
import New from './components/New/New';
function App() {


  return (

    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/new" element={<New />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<ExistingAccount />} />
      </Routes>
      {/* <NewArrivals /> */}
      {/* <Categories /> */}
    </Router>


  );
}

export default App;
