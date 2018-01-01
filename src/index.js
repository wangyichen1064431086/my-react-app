import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

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
/** Wednesday do */
const numbers = [1,2,3,4,5];


const posts = [
  {
    id: 1,
    title:'Hello world',
    content:'Welcome to learning React!'
  },
  {
    id: 2,
    title: 'Installation',
    content: 'You can install React from npm.'
  }
]
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => {
        return (
            <li key={post.id}>
              {post.title}
            </li>
          )
        })
      }
    </ul>
  );
  const content = props.posts.map((post) => (
    <div id={post.id} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      <h1>
          Hello! This is a Blog.
        </h1>
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    </div>
  )
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase()
    });
  }

  handleSubmit(event) {
    alert('A name was submitted:' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>
          Hello! This is a NameForm.
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
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


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'coconut',
      multipleValue:['b','c']
    };
    this.handleChangeForSelect1 = this.handleChangeForSelect1.bind(this);
    this.handleChangeForSelect2 = this.handleChangeForSelect2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeForSelect1(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleChangeForSelect2(event) {
    this.setState({
      multipleValue: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is:' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>
          Hello! This is a FlovorForm.
        </h1>
        <form onSubmit={this.handleSubmit}>
          <p>
          <label>
            Pick your favorite：
            <select value={this.state.value} onChange={this.handleChangeForSelect1}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          </p>
          <p>
          <label>
            Pic multiple:
            <select multiple={true} value={this.state.multipleValue} onChange={this.handleChangeForSelect2}>
              <option value='a'>a</option>
              <option value='b'>b</option>
              <option value='c'>c</option>
              <option value='d'>d</option>
              <option value='e'>e</option>
            </select>
          </label>
          </p>
          <p>
          <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests:2
    }
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello! This is a Reservation.</h1>
        <form>
          <label>
            Is going:
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
          </label>
        </form>
      </div>
    )
  }
}


function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p> ;
  }
  return <p>The water would not boil.</p>;
}



const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) { //无效的输入，会返回一个空字符串
    return  '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) /1000;//将输入四舍五入到小数点后三位。
  return rounded.toString();
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature:'',
      scale:'c'
    };
  }
  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <h1>Hello! This is a Temprature Caculator.</h1>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}


function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: ''
    };
  }
  handleChange(e) {
    this.setState({
      login: e.target.value
    });
  }
  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp} >
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  );
}


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? 
      product.name : 
      <span style={{color: 'red'}}>
      {product.name}
      </span>;//如果库存为false就显示为红色。

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )

  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {//如果该product.name中不含子字符串filterText，则返回。就是输入的东西得是product.name的子字符串，才会进行后面的
        return;
      }
      if (inStockOnly && !product.stocked) { 
        // inStockOnly为true,则如果product.stock为false就返回，即只有product.storck为true的可以进行下一步；inStockOnly为false,则该条件恒为false，即都可以进行下一步。
        return;
      }
      if (product.category !== lastCategory) { //如果和上一项product的category不一样，则插入ProductCategoryRow;如果一样就不插入ProductCategoryRow，直接执行下面的——插入ProductRow
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        );
      }
      rows.push(
        <ProductRow product={product} key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText} 
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly} 
            onChange={this.handleInStockChange} 
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
      inStockOnly:false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(filterText) {
    this.setState({
      filterText:filterText
    });
  }
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly:inStockOnly
    })
  }
  render() {
    return (
      <div>
        <h1>Hello! This is a FilterableProductTabl.</h1>
        <SearchBar 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly} 
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className}  {...other} />;
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
      <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
  )
}
class NewGreeting extends React.Component {
  render() {
    return (
      <h1>Hello,{this.props.name}</h1>
    )
  }
}
NewGreeting.propTypes = {
  name: PropTypes.string
};
NewGreeting.defaultProps = {
  name:'Hahaha'
};
class MyComponent extends React.Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    )
  }
}
MyComponent.propTypes = {
  children: PropTypes.element.isRequired
}
class MyRoot extends React.Component {
  render() {
    return (
      <div>
        <MyComponent>
          <p>I love you </p>
        </MyComponent>
        <NewGreeting />
        <Clock />
        <Toggle />
        <LoginControl />

        <Mailbox unreadMessages={messages} />
        <Page />

        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <NameForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
        <WelcomeDialog />
        <SignUpDialog />
        <App />
        <FilterableProductTable products={PRODUCTS} />
        
        <Button kind="primary" onClick={() => console.log("clicked!")} >
          HelloWorld!
        </Button>
        <ListOfTenThings />
      </div>
    )
  }
}

ReactDOM.render(
  <MyRoot />,
  document.getElementById('root')
);




registerServiceWorker();