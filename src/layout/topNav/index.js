import React from "react"
import { Layout, Menu, Avatar,Dropdown } from 'antd';
import logo from "static/logo.png"
import "./index.css"
import {pageRoute} from "routers"
import {Link}  from "react-router-dom"
const { Header} = Layout;


const menu = (
    <Menu>
        <Menu.Item>
        <Link rel="noopener noreferrer" to="/login" >
            退出登录    
        </Link>
        </Menu.Item>
    </Menu>
);

class TopNav extends React.Component{
    render(){
        return (
            <Header className="header">

                {/* logo区域 */}
                <div className="logo">
                    <img src={logo}  alt="这是logo"/>
                </div>

                {/* 顶部导航 */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{ lineHeight: '80px' }}
                    className="top-nav"
                >
                    {
                        pageRoute[0].children.map((item,index)=>(
                            <Menu.Item key={index}><Link to={item.pathname}>{item.title}</Link></Menu.Item>
                        ))
                    }
                </Menu>

                {/* 用户退出 */}
                <Dropdown overlay={menu} placement="bottomLeft">
                    <div className="user">
                        <span className="username">admin</span>
                        <Avatar size="large" icon="user"/>
                    </div>
                </Dropdown>
            </Header>
        )
    }
}
export default TopNav


