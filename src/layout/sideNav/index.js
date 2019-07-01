import React from "react"
import { Menu, Icon } from 'antd';
import "./index.css"


const { SubMenu }  = Menu;

class SideNav extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
        <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 200 }}
            className="side-wrap"
            theme="dark"
        >
            <SubMenu
            key="sub1"
            title={
                <span>
                <Icon type="mail" />
                <span>商城管理</span>
                </span>
            }
            >
            <Menu.Item key="1">商城数据管理</Menu.Item>
            <Menu.Item key="2">数据波动</Menu.Item>
            <Menu.Item key="3">数据展示</Menu.Item>
            <Menu.Item key="4">数据修改</Menu.Item>
            </SubMenu>
            <SubMenu
            key="sub2"
            title={
                <span>
                <Icon type="appstore" />
                <span>干就完事了</span>
                </span>
            }
            >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            </SubMenu>
            <SubMenu
            key="sub4"
            title={
                <span>
                <Icon type="setting" />
                <span>随便啦</span>
                </span>
            }
            >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
        );
    }
}

export default SideNav