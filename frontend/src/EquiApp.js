import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import EquiHome from './components/EquiHome';
import NavBar from './components/EquiNavBar';
import PostDetails from './components/PostDetails';

export default class EquiApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <NavBar />
          <Route path='/' exact component={EquiHome}></Route>
          <Route path='/add' component={CreatePost}></Route>
          <Route path='/edit/:id' component={EditPost}></Route>
          <Route path='/post/:id' component={PostDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
