import React, { Component } from 'react';
import {
    Row,
    Col
}                   from "reactstrap";
import Layout from "../../commons/Components/Layout";

export default class PageNotFound extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <h5>No Page Found</h5>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
