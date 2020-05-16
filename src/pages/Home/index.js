import React, { Component } from 'react';
import {
    Row,
    Col
}                   from "reactstrap";
import  {
    withRouter
}                       from "react-router-dom";
import Layout from "../../commons/Components/Layout";


class Home extends Component {

    handleRedirect = () => {
        this.props.history.push("/game")
    }

    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <h5>Welcome To Trivia Game</h5>
                        <a href="javascript:void(0)" onClick={this.handleRedirect} >Play Game</a>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default withRouter(Home);