/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Button,Grid } from 'antd-mobile';
import './List.css';

function genData(prev = []) {
  const dataArr = prev;
  for (let i = 0; i < 20; i++) {
    dataArr.push({
      id: `${i}`,
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `wine${i}`,
      price: `${2*i}`
    });
  }
  return dataArr;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
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
            refreshing: true ,
            data: genData(this.state.data)
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
                <img src={dataItem.icon} style={{ width: '75%'}} alt="" onClick={()=>alert(`${dataItem.id}`)} />
                <div className="name">
                  <span>{dataItem.text}</span>
                </div>
                <div className="price">
                  <p>￥{dataItem.price}</p>
                  <div className="buy" onClick={()=>alert(`${dataItem.id}`)}>立即购买</div>
                  <div style={{clear: 'both'}}></div>
                </div>
              </div>
            )}
          />
      </PullToRefresh>
    </div>);
  }
}

export default Demo;