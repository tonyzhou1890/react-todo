import React, { Component } from 'react'

class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: '接下去要做什么？'
    }
    this.enter = this.enter.bind(this)
  }

  enter(e) {
    if (e.keyCode !== 13) return
    const input = e.target.value.trim()
    if (input.length) {
      this.props.enter(input)
      e.target.value = ''
    }
  }

  render() {
    return (
      <input
        onKeyUp={this.enter}
        type="text"
        placeholder={this.state.placeholder}
        autoComplete="autofocus"
        className="add-input"></input>
    )
  }
}

export default TodoInput