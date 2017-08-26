import React from 'react';
import ReactDOM from 'react-dom'
import {
	Row,
	Col
} from 'antd';


export default class PcFooter extends React.Component {

	render() {

		return (
			<footer>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="footer">
						This is my website. &copy; By Eddie
					</Col>
					<Col span={2}></Col>
				</Row>
			</footer>
		);
	};
}