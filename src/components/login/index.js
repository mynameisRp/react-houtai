import React from "react"
import {Form,Icon, Input, Button, Checkbox} from "antd"
import {withRouter} from "react-router-dom"
import "./index.css"
// import BogeAdmin from "./bogeadmin"
class Login extends React.Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrap">
                <h1 className="login-header">你想登录后台管理系统吗?</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入您的姓名！' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder = "请输入您的姓名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码！' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder = "请输入您的密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <Button className="forget-paw" onClick={this.handleSkipModify.bind(this)}>忘记密码</Button>
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin.bind(this)}>
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
       
    }

    handleLogin(){
        this.props.history.push("/admin")
    }
    handleSkipModify(){
        this.props.history.push("/forgetPassword")
    }
}

Login = Form.create({ name: 'normal_login' })(Login);

export default withRouter(Login)

