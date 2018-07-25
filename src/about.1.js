import React from 'react';
import { Link } from 'react-router-dom';
import './css/about.css';

// import Button from 'antd/lib/button';
import {
    Button,
    Input,
    Layout
} from 'antd';

const InputGroup = Input.Group;
const { Header, Footer, Sider, Content } = Layout;

class AboutPanel extends React.Component {

    render() {
        return (
            <div className='about-panel'>
                <h3 className='about-title'>{this.props.title}</h3>
                {this.props.subTitle}
                <p>{this.props.desc}</p>

                {this.props.children}
            </div>
        );
    }

}

class AboutPanelSpecial extends React.Component{

    render() {
        return (
            <AboutPanel title="工作履历"
                        subTitle={<h4>经历丰富, 行业跨度大</h4>}
                        desc="走过男闯过北, 火车道上压过腿; 养过狼放过虎, 少林寺里练过武" />
        );
    }

}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }


    handleInput = (e)=>{
        console.log(e.target.value);
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className='about'>


                <AboutPanel title="自我介绍"
                            desc="我是来自xxx的应届毕业生，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。我不飘，不浮，不躁，不懒。我内心充实，物质享乐和精神刺激都不是我的嗜好。我待人诚实，从没有花言巧语，但真诚和厚道使我总能赢得朋友的信赖。我专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。我做事踏实，再小的事情我也要一丝不苟地完成。"/>

                <AboutPanel title="兴趣爱好"
                            desc="性别男, 爱好女。最大的缺点是太实诚，总爱习惯性给公司免费加班" >

                    <InputGroup>
                        <Input type="text" style={{width: '70%'}} value={this.state.input} onChange={this.handleInput}/>
                        <Button type='primary' onClick={()=> alert(this.state.input)}>点评</Button>
                    </InputGroup>

                </AboutPanel>

                <AboutPanelSpecial />

            </div>
        );
    }
}

export default About;
