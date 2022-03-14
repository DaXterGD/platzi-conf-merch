import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@styles/index.css';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Checkout from '@pages/Checkout';
import Information from '@pages/Information';
import Payment from '@pages/Payment';
import Success from '@pages/Success';
import NotFound from '@pages/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
