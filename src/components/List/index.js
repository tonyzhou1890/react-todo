import React, { Component } from 'react'
import Item from '../Item'

class List extends Component {
  render() {
    const itemList = this.props.list.map((item, index) => {
      return <Item item={item} index={index} key={index}></Item>
    })
    return (
      <ul className="app-list">
        {itemList}
      </ul>
    )
  }
}

export default List