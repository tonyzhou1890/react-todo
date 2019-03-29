import React, { Component } from 'react'
import ActionContext from '../../context'

class Item extends Component {
  render() {
    return (
      <ActionContext.Consumer>
        {actions => (
          <li className="list-item">
            <span
              onClick={() => actions.listChange(this.props.index)}
              className={`item-check ${this.props.item.done ? 'checked' : ''}`}></span>
            <span className={`item-text ${this.props.item.done ? 'checked' : ''}`}>{this.props.item.text}</span>
            <span
              onClick={() => actions.listDelete(this.props.index)}
              className="item-delete">X</span>
          </li>
        )}
      </ActionContext.Consumer>
    )
  }
}

export default Item