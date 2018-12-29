import React, { Component } from 'react'
import { Card, Col, Row } from "antd"
import ExampleTodoApp from '../examples/todos/components/app'

class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<div>
				
				<div
					// style={{ background: '#ECECEC', padding: '30px' }}
				>
					<Row gutter={16}>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
								cover={<img alt="example"
								            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
							>
								<Card.Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
						</Col>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
								cover={<img alt="example"
								            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
							>
								<Card.Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
						</Col>
						<Col span={8}>
							<Card
								hoverable
								style={{ width: 240 }}
								cover={<img alt="example"
								            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
							>
								<Card.Meta
									title="Europe Street beat"
									description="www.instagram.com"
								/>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Index