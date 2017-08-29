import Axios from 'axios';




const apiUrl = ' http://localhost:8080/api/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: 'FETCH_BOOK_BY_ID_SUCCESS',
    book
  }
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => {

        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};