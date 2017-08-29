import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link,Switch  } from 'react-router-dom'
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import BookDetailsPage from './components/book/BookDetailsPage'

import {Toolbar, ToolbarGroup, DropDownMenu, ToolbarTitle }from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';


const styles = {
 

  container:{
    textAlign: 'center'
  }
};


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color:  pinkA200,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
 
  
});



export default class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        value: 1,
      };
    }

    

  handleChange = (event, index, value) => this.setState({value});

    render(){

    return (

     <div style = {styles.container}>
      <MuiThemeProvider muiTheme={ muiTheme}>
          <div >
            <Toolbar  >
              <ToolbarGroup  >
                <ToolbarTitle text="BookShop"   />
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                  <MenuItem linkButton
                        containerElement={<Link to="/" />} 
                        value={1}
                        primaryText="Home"
                  />
                  <MenuItem linkButton
                        containerElement={<Link to="/about" />}
                        primaryText="About"
                        value={2}
                  />
                  <MenuItem linkButton
                        containerElement={<Link to="/books" />}
                        primaryText="Book"
                        value={3}
                  /> 
                  
                </DropDownMenu>
              </ToolbarGroup>
          </Toolbar>

          <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/books" component={Book} />
                  <Route exact path="/books/:id" component={BookDetailsPage} />
                  
          </Switch>
            
        </div>
      </MuiThemeProvider>
    
     {/* Each smaller components */}
      {this.props.children}
    
   
  
   
    
  </div>
  
    );
    }
  
}


