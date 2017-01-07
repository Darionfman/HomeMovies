import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'
import * as Bs from 'react-bootstrap'
import Book from './Book'

class BookDirectory extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getBooks()
    console.log(this)
  }
  render(){
    const booksComp = this.props.books
    .map((book,i) => (
      <Book
      key={i} 
      title={book.title}
      genre={book.genre}
      year={book.year}
      actors={book.actors}
      rating={book.rating}
      />
      )
    )
    return (
      <Bs.Col md={12}>
      {booksComp}
      </Bs.Col>
      )
  }
}

function mapStateToProps(store){
  console.log(store.bookStore)
  return {
    books: store.bookStore.list
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: Action.getBooks,
    postBooks: Action.addBookToStorage
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(BookDirectory)
