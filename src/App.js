import React from 'react'
import './App.css';
import Header from './Container/Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ProductListing from './Container/ProductListing';
import ProductDetail from './Container/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={ProductListing}/>
      <Route exact path='/product/:productId' component={ProductDetail}/>
      <Route> 404 page not found</Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
