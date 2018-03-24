import React, { Component } from 'react'
import CompList from '../containers/composition-list'
import CompoDetail from '../containers/Comp-detail'

class App extends Component {
  render () {
    return (
      <div>
        <CompList />
        <CompoDetail />
      </div>
    )
  }
}

export default App
