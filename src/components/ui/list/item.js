import React, { Component } from 'react'
import classNames from 'classnames'



export const Meta = (props) => {
	const { prefixCls = 'szc-list', className, avatar, title, description, ...others } = props;
	
	const classString = classNames(`${prefixCls}-item-meta`, className);
	
	const content = (
		<div className={`${prefixCls}-item-meta-content`}>
			{title && <h4 className={`${prefixCls}-item-meta-title`}>{title}</h4>}
			{description && <div className={`${prefixCls}-item-meta-description`}>{description}</div>}
		</div>
	);
	
	return (
		<div {...others} className={classString}>
			{avatar && <div className={`${prefixCls}-item-meta-avatar`}>{avatar}</div>}
			{(title || description) && content}
		</div>
	);
}

export default class Item extends Component {
	constructor(props) {
		super(props)
	}
	static Meta = Meta
	render() {
		
		const { prefixCls = 'szc-list', children,actions, extra, className, ...others } = this.props;
		const classString = classNames(`${prefixCls}-item`, className);
		
		const metaContent = [];
		const otherContent = [];
		React.Children.forEach(children, (element) => {
			if (element && element.type && element.type === Meta) {
				metaContent.push(element);
			} else {
				otherContent.push(element);
			}
		});
		const contentClassString = classNames(`${prefixCls}-item-content`, {
			[`${prefixCls}-item-content-single`]: metaContent.length < 1,
		});
		const content =
			otherContent.length > 0 ?
				<div className={contentClassString}>{otherContent}</div> :
				null;
		
		let actionsContent;
		if (actions && actions.length > 0) {
			const actionsContentItem = (action, i) => (
				<li key={`${prefixCls}-item-action-${i}`}>
					{action}
					{i !== actions.length - 1 && <em className={`${prefixCls}-item-action-split`} />}
				</li>
			);
			actionsContent = (
				<ul className={`${prefixCls}-item-action`}>
					{actions.map((action, i) => actionsContentItem(action, i))}
				</ul>
			);
		}
		const extraContent = (
			<div className={`${prefixCls}-item-extra-wrap`}>
				<div className={`${prefixCls}-item-main`}>
					{metaContent}
					{content}
					{actionsContent}
				</div>
				<div className={`${prefixCls}-item-extra`}>{extra}</div>
			</div>
		);
		const mainContent = (
			<div {...others} className={classString}>
				{extra && extraContent}
				{!extra && metaContent}
				{!extra && content}
				{!extra && actionsContent}
			</div>
		);
		return mainContent;
	}
}