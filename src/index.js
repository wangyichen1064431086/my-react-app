// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import PropTypes from 'prop-types';
import {EventEmitter} from 'events';// node原生模块
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {is} from 'immutable';

//HOC: 1.属性继承
const MyContainer = (WrappedComponent) => 
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.onNameChange = this.onNameChange.bind(this);
      //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
      const thisProps = this.props || {};
      const thisState = this.state || {};
      if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
        return true;
      }
      for (const key in nextProps) {
        if (nextProps.hasOwnProperty(key) && !is(nextProps[key], thisProps[key])) {
          return true;
        }
      }

      for (const key in nextState) {
        if (nextState.hasOwnProperty(key) && !is(nextState[key], thisState[key])) {
          return true;
        }
      }
      return false;
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

// 组合式组件开发实践
/*
  class SelectInput extends React.Component {
    static displayName = 'SelectInput';

    render() {
      const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
      const { text } = selectedItem;
      
      return (
        <div>
          <div onClick={onClickHeader}>
            <Input type="text" disabled value={text} placeholder={placeholder} />
            <Icon className={isActive} name="angle-down" />
          </div>
        </div>
      )
    }
  }

  const searchDecorator = WrappedComponent => {
    class SearchDecorator extends React.Component {
      constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
      }
    

      handleSearch(keyword) {
        this.setState({
          data: this.props.data,
          keyword
        })
      }
      
      render() {
        const { data, keyword } = this.state;
        return (
          <WrappedComponent 
            {...this.props} 
            data={data}
            keyword={keyword}
            onSearch={this.handleSearch}
          />
        );
      }
    }
    return SearchDecorator;
  }

  const asyncSelectDecorator = WrappedComponent => {
    class AsyncSelectDecorator extends React.Component {
      componentDidMount() {
        const { url, params } = this.props;

        fetch(url, { params }).then(data => {
          this.setState({
            data
          })
        })
      }

      render() {
        return (
          <WrappedComponent {...this.props} data={this.state.data} />
        )
      }
    }
    return AsyncSelectDecorator;
  }

  const FinalSelector = compose(asyncSelectDecorator, searchDecorator,selectedItemDecorator)(Selector);
*/
ReactDOM.render(
  <HocComponent/>,
  document.getElementById('root')
);




