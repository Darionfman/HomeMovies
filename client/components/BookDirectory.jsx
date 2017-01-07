import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'
import * as Bs from 'react-bootstrap'

class BookDirectory extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <Bs.Col md={12}>
      </Bs.Col>
      )
  }
}

function mapStateToProps(store){
  return {
    books: bookStore.books
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: Action.getBooks,
    postBooks: Action.addBookToStorage
  }, dispatch)
}