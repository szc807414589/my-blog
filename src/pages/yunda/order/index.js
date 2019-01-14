import React, { Component } from "react";
import { Select, Button, Card, Col, Row } from "antd";
import "./order.less";
const Option = Select.Option;
const CustomerInfo = [
    {
        name: "客户1",
        id: 1,
        mobile: 18788888888,
        weight: "2kg",
        value: "10yuan",
        city: "浙江省-杭州市-江干区",
        adress: "东港嘉苑三区",
        item: {
            name: "衣服",
            number: 3,
            remark: "备注"
        }
    },
    {
        name: "客户2",
        id: 2,
        mobile: 18788888888,
        weight: "2kg",
        value: "10yuan",
        city: "浙江省-杭州市-江干区",
        adress: "东港嘉苑三区",
        item: {
            name: "衣服",
            number: 3,
            remark: "备注"
        }
    },
    {
        name: "客户3",
        id: 3,
        mobile: 18788888888,
        weight: "2kg",
        value: "10yuan",
        city: "浙江省-杭州市-江干区",
        adress: "东港嘉苑三区",
        item: {
            name: "衣服",
            number: 3,
            remark: "备注"
        }
    }
];
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeValue: "",
            info: {
                name: "",
                mobile: "",
                weight: "",
                value: "",
                city: "",
                adress: "",
                item: {
                    name: "",
                    number: "",
                    remark: ""
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(changeValue) {
        this.setState({
            changeValue
        });
    }
    handleClick() {
        let info = CustomerInfo[this.state.changeValue];
        this.setState({ info });
    }
    render() {
        const { name, mobile, weight, value, city, adress } = this.state.info;
        return (
            <div className={"orderBox"}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Select
                            defaultValue="客户1"
                            style={{ width: 120 }}
                            onChange={this.handleChange}
                        >
                            {CustomerInfo.map((v, i) => (
                                <Option key={v.id} value={i}>
                                    {v.name}
                                </Option>
                            ))}
                        </Select>
                        <Button onClick={this.handleClick}>查询</Button>
                    </Col>
                    <Col span={8}>
                        <Card 
                        title="运单信息" 
                        style={{ width: 300 }}
                        extra={<a href="#">打印</a>}
                        >
                            <p>{name}</p>
                            <p>{mobile}</p>
                            <p>{weight}</p>
                            <p>{value}</p>
                            <p>{city}</p>
                            <p>{adress}</p>
                            <p>更多信息....</p>
                        </Card>
                    </Col>
                </Row>

               
            </div>
        );
    }
}
export default Order;
