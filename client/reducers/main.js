//This file will combine all reducers into one big object
import { combineReducers, createStore, applyMiddleware } from 'redux'
import bookReducer from './bookReducer'

const logMiddleware = ({ dispatch, getState }) => {
  // console.log('Enter logMiddleware')
  return function(next) {
    return function(action) {
      console.log('Action received:', action)
      return next(action)
    }
  }
}

const thunkMiddleware = ({ dispatch, getState }) => {
  // console.log('Enter thunkMiddleware')
  return function(next) {
    // console.log('Function "next" provided:', next)
    return function (action) {
      // console.log('Handling action:', action)
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action)
    }
  }
}

const finalCreateStore = applyMiddleware(logMiddleware, thunkMiddleware)(createStore)
// const finalCreateStore = applyMiddleware(Thunk)(createStore)

const allReducers = combineReducers({
  bookStore: bookReducer
})

export const store = finalCreateStore(allReducers)

// console.log('store state after initialization:', store.getState())