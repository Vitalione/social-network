import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
        </Routes>
            </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
