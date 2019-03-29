import React from 'react'

const defaultFunc = () => {
  console.log('error')
}

export default React.createContext(
  {
    listDelete: defaultFunc,
    listChange: defaultFunc
  }
)