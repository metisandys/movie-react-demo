import React from 'React';
import {
	Row,
	Col
} from 'antd';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';

export default class PcIndex extends React.Component {
	render() {
		return (
			<div>	
				<PcHeader/> 
				<PcFooter/>
			</div>
		);
	};
}