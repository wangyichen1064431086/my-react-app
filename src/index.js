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
        <h1>Hello! This is a Clock.</h1>
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
      <div>
        <h1>Hello! This is a Toggle.</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
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
  
  render(){
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        { isLoggedIn ? <UserGreeting /> : <GuestGreeting /> }
      </div>
    )
  }
}



class LoginButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}
class LogoutButton extends React.Component {

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
        <h1>Hello! This is a LoginControl.</h1>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <div>
          The user is <strong>{isLoggedIn ? 'currently' : 'not'}</strong> logged in.
        </div>
      </div>
    );
  }
}

class Mailbox extends React.Component {

  render() {
    const unreadMessages = this.props.unreadMessages;

    return (
      <div>
        <h1>Hello! This is Mailbox</h1>
        {
          unreadMessages.length >0 &&
          <h2>
              You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];


function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <div> Warning!</div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }
  render() {
    return (
      <div>
        <h1>Hello! This is a Page.</h1>
        <WarningBanner warn = {this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide':'Show'}
        </button>
      </div>
    )
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1,2,3,4,5];

class MyRoot extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
        <NumberList numbers={numbers} />
      </div>
    )
  }
}
ReactDOM.render(
  <MyRoot />,
  document.getElementById('root')
);



registerServiceWorker();