import React from "react"
import {Form,Icon, Input, Button, Cascader } from "antd"
import {withRouter} from "react-router-dom"
import "./index.css"
// import BogeAdmin from "./bogeadmin"
class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            options2 : [
                {
                    value: 1,
                    label: 1
                }
            ],
            options3 : [
                {
                    value: 'a',
                    label: 'a'
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <div style={{marginBottom: '20px'}}>
                    <span style={{marginRight: '20px'}}>一级分类：</span>
                    <Button onClick={this.handle1} style={{marginRight: '20px'}}>分类1</Button>
                    <Button onClick={this.handle2} style={{marginRight: '20px'}}>分类2</Button>
                    <Button onClick={this.handle3}>分类3</Button>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <span style={{marginRight: '20px'}}>二级分类：</span>
                    <Cascader options={this.state.options2} style={{marginRight: '20px'}}/>
                    <Button style={{marginRight: '20px'}} onClick={this.add1}>新增</Button>
                    <Button onClick={this.del1}>删除</Button>
                </div>
                <div>
                    <span style={{marginRight: '20px'}}>三级分类：</span>
                    <Cascader options={this.state.options3} style={{marginRight: '20px'}}/>
                    <Button style={{marginRight: '20px'}} onClick={this.add2}>新增</Button>
                    <Button onClick={this.del2}>删除</Button>
                </div>
            </div>
        )
       
    }

    handle1 = () => {
        this.setState({
            options2 : [
                {
                    value: 1,
                    label: 1
                }
            ],
            options3 : [
                {
                    value: 1,
                    label: 1
                }
            ]
        })
    }

    handle2 = () => {
        this.setState({
            options2 : [
                {
                    value: 2,
                    label: 2
                }
            ],
            options3 : [
                {
                    value: 2,
                    label: 2
                }
            ]
        })
    }

    handle3 = () => {
        this.setState({
            options2 : [
                {
                    value: 3,
                    label: 3
                }
            ],
            options3 : [
                {
                    value: 3,
                    label: 3
                }
            ]
        })
    }

    add1 = () => {
        let newList = this.state.options2
        newList.push({
            value: Math.ceil(Math.random()*100),
            label: Math.ceil(Math.random()*100) 
        })
        this.setState({
            options2: newList
        })
    }

    add2 = () => {
        let newList = this.state.options3
        newList.push({
            value: Math.ceil(Math.random()*100),
            label: Math.ceil(Math.random()*100) 
        })
        this.setState({
            options3: newList
        })
    }

    del1 = () => {
        let newList = this.state.options2
        newList.pop();
        this.setState({
            options2: newList
        })
    }

    del2 = () => {
        let newList = this.state.options3
        newList.pop();
        this.setState({
            options3: newList
        })
    }

    // handleLogin(){
    //     this.props.history.push("/admin")
    // }
    // handleSkipModify(){
    //     this.props.history.push("/forgetPassword")
    // }
}

Login = Form.create({ name: 'normal_login' })(Login);

export default withRouter(Login)

