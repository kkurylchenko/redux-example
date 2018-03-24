import React, { Component } from 'react'
import { connect } from 'react-redux'

class CompositionDetail extends Component {
  render () {
    if (!this.props.comp) {
      return <div>Please, select composition</div>
    }

    return (
      <div>
        <h3>Details for: {this.props.comp.title}</h3>
        <div>Title: {this.props.comp.title}</div>
        <div>Tuning: {this.props.comp.tuning}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    comp: state.activeComp
  }
}

export default connect(mapStateToProps)(CompositionDetail)
