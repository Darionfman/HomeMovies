export function addBookToStorage (data) {
  const books = localStorage.getItem('books')
  books = books ? books : []
  books.push(data)
  localStorage.setItem('books', JSON.stringify(books))
  return dispatch =>
    dispatch({
      type:'GET_BOOKS',
      payload: books
    })
}

export function getBooks () {
  const books = localStorage.getItem('books')
  books = books ? JSON.parse(books) : []
  return dispatch =>
    dispatch({
      type:'GET_BOOKS',
      payload: books
    })
}