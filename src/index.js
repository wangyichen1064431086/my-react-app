// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import PropTypes from 'prop-types';
import {EventEmitter} from 'events';// node原生模块

const emitter = new EventEmitter();
console.log(emitter);

class ListItem extends React.Component {
  static defaultProps = {
    checked: false
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
        <span>{this.props.value}</span>
      </li>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked || false
      }))
    }
  }

  onItemChange(entry) {
    const {list} = this.state;
    this.setState({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
      }))
    });
    emitter.emit('ItemChange',entry);//触发ItemChange事件,即广播了一个事件ItemChange, 为监听函数传递了实参entry,即emitter.on的回调函数的形参data
  }
  
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((entry, index) => (
              <ListItem
                key={`list-${index}`}
                value={entry.text}
                checked={entry.checked}
                onChange={this.onItemChange.bind(this, entry)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  componentDidMount() {
    this.itemChange = emitter.on('ItemChange', (data) => {
      console.log(data);
    })
  }

  componentWillUnmount() {
    emitter.removeListener(this.itemChange);
  }

  render() {
    return (
      <List list={[
        {text:1},
        {text:2}
      ]} />
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);




registerServiceWorker();