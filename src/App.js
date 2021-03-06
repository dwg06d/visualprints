import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Test from './pages/Test';
import Products from "./components/products/Products";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/store" component={Store} />
          <Route path="/test" component={Test} />
          <Route
						path="/products/:id"
						render={(props) => (
							<Products id={props.match.params.id} />
						)}
					/>
        </Switch>
        <Footer />
      
    </div>
    
    
    </BrowserRouter>
  );

  }
            
export default App;
