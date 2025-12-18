import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {/* <h1>ReactJS</h1>
        <p>ReactJS is a JavaScript library for building user interfaces.</p> */}
        {/* <Login onLogin={()=>alert('Logged in!')} /> */}

        {isLoggedIn ? <Dashboard /> : (<Login onLogin={this.handleLogin} />)}
      </div>
    );
  }
}

export default App;