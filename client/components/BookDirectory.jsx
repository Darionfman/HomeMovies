import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/action'
import * as Bs from 'react-bootstrap'
import Book from './Book'

class BookDirectory extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showModal:false
    }
  }
  componentDidMount(){
    this.props.getBooks()
    console.log(this)
  }

  submitBook(book){
    return this.props.postBook(book)
  }

  click(){
    this.setState({
      showModal: true
    }))
  }

  close(){
    this.setState({
      showModal: false
    })
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
      <Submission 
        show={this.state.showModal} 
        submit={this.props.submitBook.bind(this)} 
        close={this.close.bind(this)}
      />
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
    postBook: Action.addBookToStorage
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(BookDirectory)
