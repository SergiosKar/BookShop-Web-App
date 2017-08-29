import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm'
import BookDetailsPage from './BookDetailsPage'
import { Route, Link,Switch  } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Book extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;

    return(
     <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <Table >
            
            <TableBody style={{alignItems:"center"}}  displayRowCheckbox={true}  >
            {this.props.books.map((b, i) => {
              return(
                <TableRow key={i}>
                  <TableRowColumn>{b.title}</TableRowColumn>
                  <TableRowColumn>{b.year}</TableRowColumn>
                  <TableRowColumn>{b.author}</TableRowColumn>
                  <TableRowColumn>{b.price}</TableRowColumn>
                  <TableRowColumn><Link to={"/books/"+b._id}>View</Link></TableRowColumn>
                 
                </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>

      
      
      
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);