export function addBookToStorage (data) {
  return dispatch =>{
    let books = localStorage.getItem('books')
    books = books ? JSON.parse(books) : []
    books.push(data)
    localStorage.setItem('books', JSON.stringify(books))    
    return dispatch({
      type:'GET_BOOKS',
      payload: books
    })    
  }
}

export function getBooks () {
  return dispatch =>{
    let books = localStorage.getItem('books')
    books = books ? JSON.parse(books) : []
    return dispatch({
      type:'GET_BOOKS',
      payload: books
    })    
  }
}