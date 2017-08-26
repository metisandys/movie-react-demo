import React from 'react';
import ReactDOM from 'react-dom'
import {
	Row,
	Col
} from 'antd';
import {
	Menu,
	Icon,
	Table,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Tabs
} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PcHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			currect: 'index',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	};
	setModalVisible(value) {
		this.setState({
			modalVisible: value
		});
	};
	handleClick(e) {
		if (e.key = "register") {
			this.setState({
				current: 'register'
			});
			this.setModalVisible(true);
		} else {
			{
				this.setState({
					current: e.key
				});
			}
		}
	};
	render() {
		let {
			getFieldDecorator
		} = this.props.form;
		const userShow = this.state.hasLogined ? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					&nbsp;&nbsp;
					<Link target="_blank">
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button">退出</Button>
				</Menu.Item> : <Menu.Item key="register" class="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="" className="logo">
							<img src="./src/images/logo.png" alt="logo" />
							<span>祥宇电影</span>
						</a>
					</Col>
					<Col span={8} offset={8}>
						<Menu mode="horizontal" selectedKeys={[this.state.currect]} onClick={this.handleClick.bind(this)}>
							<Menu.Item key="index">
          						<Icon type="appstore" />首页
        					</Menu.Item>
        					<Menu.Item key="list">
          						<Icon type="appstore" />详情页
        					</Menu.Item>
        					<Menu.Item key="about">
          						<Icon type="appstore" />关于
        					</Menu.Item>
        					{userShow}
						</Menu>
						<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "关闭">
							<Tabs type="card">
								<TabPane tab="注册" key="2">
									<Form horizontal>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
										</FormItem>
										<FormItem label="确认密码">
											<Input type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}/>
										</FormItem>
										<Button type="primary" htmlType="submit" >注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};
}
export default PcHeader = Form.create({})(PcHeader);