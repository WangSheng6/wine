
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import UserInfoPage from './pages/user/UserInfoPage'
import './App.css';
import { Button, List } from 'antd-mobile';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  open(url){
    var timeout, t = 1000, hasApp = true;
          setTimeout(function () {
            if (!hasApp) {
                //没有安装微信
                var r=window.confirm("您没有安装微信，请先安装微信!");
                if (r==true){
                    window.location.href="http://weixin.qq.com/"
                }
            }else{
                //安装微信
                //window.alert('有安装');
                return;
            }
            document.body.removeChild(ifr);
          }, 2000)
         
          var t1 = Date.now();
          var ifr = document.createElement("iframe");
          ifr.setAttribute('src', url);
          ifr.setAttribute('style', 'display:none');
          document.body.appendChild(ifr);
          timeout = setTimeout(function () {
             var t2 = Date.now();
             if (!t1 || t2 - t1 < t + 100) {
               hasApp = false;
             }
          }, t);
  }
  render(){
    return (
      <div className="App">
        {/* <Route exact path='/' component={Home}/>
        <Route path='/UserInfoPage' component={UserInfoPage}/> 
        <Button type="warning">warning</Button>*/}
        <a class="dl-btn" id="download" onClick={()=>this.open('weixin://')}>打开微信</a>
      </div>
    )
  }
  
}

export default App;
