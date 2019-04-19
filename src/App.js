import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div>
        {/* here is where I render the header so it will display on every component.  */}
        <Header/>
        {/* here is where I render the routes */}
        {routes}
      </div>
    );
  }
}

export default App;
