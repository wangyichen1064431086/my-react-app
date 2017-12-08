import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }

    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}


class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome back!</h1>;    
  }
}
class GuestGreeting extends React.Component {
  render() {
    return <h1>Please sign up.</h1>;    
  }
}
class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    const isLoggedIn = this.props.isLoggedIn;
    if(isLoggedIn) {
      return <UserGreeting />
    } 
    return <GuestGreeting />
  }
}



class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}
class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
class MyRoot extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <LoginControl />
      </div>
    )
  }
}
ReactDOM.render(
  <MyRoot />,
  document.getElementById('root')
);



registerServiceWorker();