import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookDetails from './BookDetails'
import * as bookActions from '../../actions/bookActions';



class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
      this.props.fetchBookById(this.props.book._id);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <BookDetails book={this.props.book }/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      book: state.book
    };
};
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      // This dispatch will trigger 
      // the Ajax request we setup
      // in our actions
      fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);