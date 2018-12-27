import React, { Component } from 'react'
import classNames from 'classnames'
import Item from './item'
import './style/index.less'


export default class List extends Component {
	constructor(props) {
		super(props)
		this.renderItem = this.renderItem.bind(this)
	}
	
	static Item = Item
	static defaultProps = {
		dataSource: [],
		prefixCls: 'szc-list',
		bordered: false,
		split: true,
	};
	keys = {};
	renderItem = (item, index) => {
		const {
			dataSource,
			renderItem,
			rowKey
		} = this.props;
		let key;
		
		if (typeof rowKey === 'function') {
			key = rowKey(dataSource[index]);
		} else if (typeof rowKey === 'string') {
			key = dataSource[rowKey];
		} else {
			key = dataSource.key;
		}
		
		if (!key) {
			key = `list-item-${index}`;
		}
		
		this.keys[index] = key;
		
		return renderItem(item, index);
	};
	
	render() {
		const {
			bordered,
			dataSource,
			renderItem,
			className,
			prefixCls,
			split,
			itemLayout,
			...rest
		} = this.props
		let splitDataSource = [...dataSource];
		
		let childrenContent;
		childrenContent = <div style={{ minHeight: 53 }}/>;
		if (splitDataSource.length > 0) {
			const items = splitDataSource.map((item, index) => this.renderItem(item, index));
			const childrenList = [];
			React.Children.forEach(items, (child, index) => {
				childrenList.push(
					React.cloneElement(child, {
						key: this.keys[index],
					}),
				);
			});
			childrenContent = childrenList;
		}
		const classString = classNames(prefixCls, className, {
			[`${prefixCls}-vertical`]: itemLayout === 'vertical',
			[`${prefixCls}-split`]: split,
			[`${prefixCls}-bordered`]: bordered,
		});
		return (
			<div className={classString} {...rest}>
				{childrenContent}
			</div>
		)
	}
}