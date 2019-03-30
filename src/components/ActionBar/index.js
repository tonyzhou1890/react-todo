import React, { Component } from 'react'

class ActionBar extends Component {
  render() {
    return (
      <div className="action-bar">
        <div className="left">
          <span>{this.props.number}</span>
          <span> items left</span>
        </div>
        <div className="middle">
          <span
            className={`all ${this.props.status === 'all' ? 'checked' : ''}`}
            onClick={() => this.props.changeStatus('all')}
          >all</span>
          <span
            className={`active ${this.props.status === 'active' ? 'checked' : ''}`}
            onClick={() => this.props.changeStatus('active')}
          >active</span>
          <span
            className={`completed ${this.props.status === 'completed' ? 'checked' : ''}`}
            onClick={() => this.props.changeStatus('completed')}
          >completed</span>
        </div>
        <div className="right" onClick={() => this.props.clearList()}>
          <span>Clear completed</span>
        </div>
      </div>
    )
  }
}

export default ActionBar