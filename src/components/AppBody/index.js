import React, { Component } from 'react'
import TodoInput from '../TodoInput'
import List from '../List'
import ActionBar from '../ActionBar'
import ActionContext from '../../context'

class AppBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      status: 'all' // all, active, completed
    }
    this.listAdd = this.listAdd.bind(this)
    this.listDelete = this.listDelete.bind(this)
    this.listChange = this.listChange.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.clearList = this.clearList.bind(this)
  }

  // 新增 todo
  listAdd(text) {
    const item = {
      text,
      done: false
    }
    this.setState({
      list: [...this.state.list, item]
    })
  }

  // 改变 list 某一项状态
  listChange(index) {
    const list = this.state.list.slice()
    list[index].done = !list[index].done
    this.setState({
      list
    })
  }

  // 删除 list 某一项
  listDelete(index) {
    const list = this.state.list.slice()
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  // 改变当前显示列表
  changeStatus(value) {
    this.setState({
      status: value
    })
  }

  // 清空列表
  clearList() {
    this.setState({
      list: []
    })
  }

  render() {
    let filterList = []
    let number = this.state.list.filter(item => {
      return !item.done
    }).length
    if (this.state.status === 'active') {
      filterList = this.state.list.filter(item => {
        return !item.done
      })
    } else if (this.state.status === 'completed') {
      filterList = this.state.list.filter(item => {
        return item.done
      })
    } else {
      filterList = this.state.list
    }

    return (
      <div className="App-body">
        <TodoInput enter={ this.listAdd }></TodoInput>
        <ActionContext.Provider value={{
          listChange: this.listChange,
          listDelete: this.listDelete
        }}>
          <List list={filterList}></List>
        </ActionContext.Provider>
        <ActionBar
          number={number}
          status={this.state.status}
          changeStatus={this.changeStatus}
          clearList={this.clearList}
        ></ActionBar>
      </div>
    )
  }
}

export default AppBody