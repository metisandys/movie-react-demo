import React from 'React';
import ReactDom from 'React-dom';
import PcIndex from './components/pc_index';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css'

export default class Root extends React.Component {
	render() {
		return (
			//这里替换了之前的index，变成程序的入口

			<div>
				<MediaQuery query='(min-device-width: 1200px)'>
					<PcIndex/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1200px)'>
					<p className="mobile">不好意思啦！！！移动端正在适配中，请用电脑打开吧。</p>
				</MediaQuery>
			</div>
		);
	};
}

ReactDom.render(<Root/>, document.getElementById('mainContainer'));