import React, {Component} from 'react'
import { Card, Icon, List,Row, Col,Carousel,Avatar } from 'antd'
import listItem from './mock'
import './home.less'

const {Meta} = Card;
const IconText = ({type, text}) => (
	<span>
	    <Icon type={type} style={{marginRight: 8}}/>{text}
    </span>
);

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false
		}
	}
	
	componentDidMount() {
	
	}
	
	render() {
		const list = listItem.array
		return (
			<Row className="home_container">
				<Col xl={18} lg={24} className="left_content">
					{
						<List
							itemLayout="vertical"
							size="small"
							bordered={true}
							dataSource={list}
							style={{width:'700px'}}
							renderItem={item => (
								<List.Item
									key={item.title}
									actions={[
										<IconText type="star-o" text={item.collection}/>,
										<IconText type="like-o" text={item.likes}/>,
										<IconText type="message" text={item.comment}/>
									]}
									extra={<img width={272}
									            alt="logo"
									            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
								>
									<List.Item.Meta
										title={<a href={item.href}>{item.title}</a>}
										description={item.desc}
									/>
								</List.Item>
							)}
						/>
						// )
					}
				</Col>
				<Col  xl={6} lg={0} className="right_content">
					<Card
						style={{ width: 240 }}
						actions={[
							<Icon type="setting" />,
							<Icon type="edit" />,
							<Icon type="ellipsis" />
						]}
					>
						<Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title="Card title"
							description="This is the description"
						/>
					</Card>
					{/*热门文章*/}
					<div>
						<Card
							title="热门文章"
							style={{ width: 240 ,marginTop:20}}
						>
							<p>热门文章1</p>
							<p>热门文章2</p>
							<p>热门文章3</p>
						</Card>,
					</div>
					{/*banner*/}
					<Carousel autoplay>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
					</Carousel>
					{/*友情链接*/}
				</Col>
			</Row>
		)
	}
}

export default Home