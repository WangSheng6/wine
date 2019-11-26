import React from 'react';
//import ReactDOM from 'react-dom';
import { Carousel, WingBlank, Card, WhiteSpace } from 'antd-mobile';
import './Detail.css';
import Bmob from "hydrogen-js-sdk";
Bmob.initialize("57b561f7d48f3c2e", "191019");

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsID: props.match.params.id,
            data: {},
            banner: [],
            intro: [],
            imgHeight: 176
        };
    }

    componentDidMount() {
        const query = Bmob.Query("wine");
        query.equalTo("goodsID", "==", this.state.goodsID*1);
        query.find().then(res => {
            //console.log(res)

            const data = res[0]
            console.log(data)
            setTimeout(() => {
                this.setState({
                    data: data,
                    banner: data.Banner.split('||'),
                    intro: data.intro.split('||')
                });
            }, 100);
        });
        
    }

    render() {
        return (
            <div style={{ paddingTop: '15px' }}>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.banner.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <h3>{this.state.data.Name}</h3>
                <p>￥{this.state.data.Price}</p>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="商品详情"
                        />
                        <Card.Body>
                            <div>
                                {this.state.intro.map(val => (
                                    <a
                                        key={val}
                                        href="http://www.alipay.com"
                                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                    >
                                        <img
                                            src={`${val}`}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </Card.Body>

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                
            </div>
        )
    }
}

export default Detail;