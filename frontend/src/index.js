import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from "react-router-dom";

import './index.css';
 import Homepg from './LandingPg/home/Homepg';
import SignUp from "./LandingPg/SignUp/Signup";
import AboutPg from "./LandingPg/About/AboutPg"
import Productpg from "./LandingPg/Product/Productpg"
import PricingPg from "./LandingPg/pricing/PricingPg"
import SupportPg from "./LandingPg/Support/SupportPg"
import Navbar from './Navbar';
import Footer from './Footer';
import PgNotFound from './LandingPg/PgNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route
    path='/'
    element={<Homepg/>}
    />

    <Route
    path='/signup'
    element={<SignUp/>}
    />

    <Route
    path='/about'
    element={<AboutPg/>}
    />

    <Route
    path='/product'
    element={<Productpg/>}
    />

    <Route
    path='/price'
    element={<PricingPg/>}
    />

    <Route
    path='/support'
    element={<SupportPg/>}
    />

    <Route
    path='*'
    element={<PgNotFound/>}
    />
  </Routes>
  <Footer/>
  </BrowserRouter>
);


