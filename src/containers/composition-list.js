import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectComposition } from '../actions/index'
import { bindActionCreators } from 'redux'

class CompositionList extends Component {
  renderList () {
    return this.props.compositions.map(comp => {
      return (
        <li
          key={comp.title}
          onClick={() => this.props.selectComposition(comp)}
          className='list-group-item'>
          {comp.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    // ...state
    compositions: state.compositions
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectComposition: selectComposition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompositionList)
