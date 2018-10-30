import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import { Button } from 'antd-mobile'
class Books extends Component {
  constructor () {
    super()
    this.state = {
      menu : [{
        key:'book',
        icon:'#icon-plus',
        text:'添加书籍'
      }]
    };
  }
  handleMenuClick(re){
    if("book" === re.key){
      this.props.history.push('/add')
    }
  }
  render() {
    return (
      <div>
        <ComTitle type="none" menu={this.state.menu} onSelect={this.handleMenuClick.bind(this)}>达达阅读</ComTitle>
      </div>
    );
  }
}

export default Books;