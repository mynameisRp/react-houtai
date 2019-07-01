import React from "react"
import TopNav from "layout/topNav"
import SideNav from "layout/sideNav"
import Content from "layout/content"
import { Layout } from 'antd';
import "./index.css"
const { Sider } = Layout;
export default class Mymgm extends React.Component {
    render(){
        return (
            <Layout className="wrap">
                <TopNav/>
                <Layout className="main-wrap">
                    <Sider className="side-wrap">
                        <SideNav/>
                    </Sider>
                    <Layout className = "con-wrap" >
                        <Content />
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}





