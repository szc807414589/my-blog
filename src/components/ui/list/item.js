import React, { Component } from 'react'
import classNames from 'classnames'


export default class Item extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		
		const { prefixCls = 'szc-list', children, extra, className, ...others } = this.props;
		const classString = classNames(`${prefixCls}-item`, className);
		
		const metaContent = [];
		const otherContent = [];
		React.Children.forEach(children, (element) => {
			otherContent.push(element);
		});
		const contentClassString = classNames(`${prefixCls}-item-content`, {
			[`${prefixCls}-item-content-single`]: metaContent.length < 1,
		});
		const content =
			otherContent.length > 0 ?
				<div className={contentClassString}>{otherContent}</div> :
				null;
		const extraContent = (
			<div className={`${prefixCls}-item-extra-wrap`}>
				<div className={`${prefixCls}-item-main`}>
					{metaContent}
					{content}
				</div>
				<div className={`${prefixCls}-item-extra`}>{extra}</div>
			</div>
		);
		const mainContent = (
			<div {...others} className={classString}>
				{extra && extraContent}
				{!extra && metaContent}
				{!extra && content}
			</div>
		);
		return mainContent;
	}
}