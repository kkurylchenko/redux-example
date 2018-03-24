import {combineReducers} from 'redux'
import CompositionReducer from './reducer_compositions'
import ActiveComp from './reducer_active_composition'

const rootReducer = combineReducers({
  compositions: CompositionReducer,
  activeComp: ActiveComp
})

export default rootReducer
