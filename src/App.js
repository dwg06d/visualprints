import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        
      
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
