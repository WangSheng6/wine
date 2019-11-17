
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import UserInfoPage from './pages/user/UserInfoPage'
import './App.css';
import { Button, List } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={Home}/>
      <Route path='/UserInfoPage' component={UserInfoPage}/> */}
      <Button type="warning">warning</Button>
    </div>
  );
}

export default App;
