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

function genData(prev = []) {
  const dataArr = prev;
  const query = Bmob.Query("wine");
  //const res = await query.find();
  //console.log(res)
  query.find().then(res => {
    console.log(res.length)
    
    for (let i = 0; i < res.length; i++) {
      dataArr.push({
        id: `${res[i]['ID']}`,
        icon: res[i]['Banner'].split(',')[0],
        text: res[i]['Name'],
        price: `${res[i]['Price']}`
      });
    }
    console.log(dataArr)
  })

  for (let i = 1; i < 20; i++) {
    dataArr.push({
      id: `${i}`,
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `wine${i}`,
      price: `${2 * i}`
    });
  }
  //console.log(dataArr)
  return dataArr;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }
  change(state){
    this.props.history.push({pathname:'/list/'+ state.id})
  }
  genData(prev = []){
    dataArr = prev;
    query.limit(10);
    query.find().then(res => {
      for (let i = 0; i < res.length; i++) {
        dataArr.push({
          id: `${res[i]['goodsID']}`,
          icon: res[i]['Banner'].split('||')[0],
          text: res[i]['Name'],
          price: `${res[i]['Price']}`
        });
      }
      //console.log(dataArr)
    }).then(res=>{
        setTimeout(() => this.setState({
          height: hei,
          data: dataArr,
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
          this.setState({
            refreshing: true,
            data: this.genData(this.state.data)
          });
          //this.setState({});
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
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
                <p>￥{dataItem.price}</p>
                <div className="buy" onClick={() => this.change({ 'id': dataItem.id })}>立即购买</div>

                <div style={{ clear: 'both' }}></div>
              </div>
            </div>
          )}
        />
      </PullToRefresh>
    </div>);
  }
}

export default List;