import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import Form from './Form';
class Home extends Component {
  handleSubmit = (payload) => {
    this.props.history.push('/about');
  }
  render() {
      return (
      <div>
        <h2>Home</h2>
        <Form submit={this.handleSubmit}/>
      </div>
    )
  }
}

Home = withRouter(Home);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
