import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TopMenu from './components/TopMenu'
import Product from './pages/Products'
import { CartProvider } from './contexts/Cart'

const Home = () => <h2>Home</h2>;
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/products/" exact component={Product} />
      </Router>
    </CartProvider>

  );
}

export default App;
