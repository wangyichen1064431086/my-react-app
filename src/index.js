// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import PropTypes from 'prop-types';
import {EventEmitter} from 'events';// node原生模块

//HOC: 1.属性继承
const MyContainer = (WrappedComponent) => 
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.onNameChange = this.onNameChange.bind(this);
    }
    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }

    render() {
      const newProps = {
          value: this.state.name,
          onChange: this.onNameChange,
          name:'myInput'
        
      }
      return  (
      <div style= {{backgroundColor:'red'}} >
      <WrappedComponent {...this.props} {...newProps} />
      </div>
      );
    }
  }


class MyComponent extends React.Component {
  render() {
    return <input name="name" {...this.props} />
  }
}

const HocComponent = MyContainer(MyComponent);

//2.HOC:反向代理
/// TODO
ReactDOM.render(
  <HocComponent/>,
  document.getElementById('root')
);




