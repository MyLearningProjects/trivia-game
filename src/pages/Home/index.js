import React, { Component } from 'react';
import {
    Row,
    Col
}                   from "reactstrap";
import Layout from "../../commons/Components/Layout";


export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <h5>Welcome To Trivia Game</h5>
                        <a href="/game" >Play Game</a>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
