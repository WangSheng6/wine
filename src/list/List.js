/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Grid } from 'antd-mobile';
import './List.css'
import Bmob from "hydrogen-js-sdk";
Bmob.initialize("57b561f7d48f3c2e", "191019");
var query = Bmob.Query("wine");
var dataArr = [];
var hei;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
      hasMore: true,
      reqNum: 0
    };
    window.document.title = '商品列表'
  }
  change(state){
    this.props.history.push({pathname:'/list/'+ state.id})
  }
  genData(prev = [],reqNum=0){
    dataArr = prev;
    query.limit(10);
    query.skip(10*reqNum);
    query.find().then(res => {
      for (let i = 0; i < res.length; i++) {
        dataArr.push({
          id: `${res[i]['goodsID']}`,
          icon: res[i]['Banner'].split('||')[0],
          text: res[i]['Name'],
          price: `${res[i]['Price']}`
        });
      }
      if(res.length<10){
        this.setState({
          hasMore: false
        });
        // document.querySelector('.am-pull-to-refresh-indicator').innerHTML = '我也是有底线的'
        // document.querySelector('.am-pull-to-refresh-indicator').style.marginBottom = '0'
        // document.querySelector('.am-pull-to-refresh-indicator').style.marginTop = '8px'
        //this.refs.noMore.style.display = 'block'
      }
      //console.log(dataArr)
    }).then(res=>{
        setTimeout(() => this.setState({
          height: hei,
          data: dataArr,
          refreshing: false
        }), 0);
    })
  }

  componentDidMount() {
    hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    this.genData();
  }

  render() {
    return (<div>
      
      <PullToRefresh
        damping={100}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
        
          if(this.state.hasMore){
            this.setState({
              refreshing: true,
              data: this.genData(this.state.data,this.state.reqNum+1)
            });
          }
        
        }}
      
      >
        {/* {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {this.state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))} */}
        <Grid data={this.state.data}
          columnNum={2}
          hasLine={false}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
              <img src={dataItem.icon} style={{ width: '75%' }} alt="" onClick={() => this.change({ 'id': dataItem.id })} />
              <div className="name">
                <span>{dataItem.text}</span>
              </div>
              <div className="price">
                <p>价格：￥{dataItem.price}</p>
                {/* <div className="buy" onClick={() => this.change({ 'id': dataItem.id })}>了解详情</div> */}
                {/* <div style={{ clear: 'both' }}></div> */}
              </div>
            </div>
          )}
        />
      </PullToRefresh>
    </div>);
  }
}

export default List;