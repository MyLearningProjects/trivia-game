import React, { 
    Component 
}                       from 'react';
import {
    Row,
    Col
}                       from "reactstrap";
import  {
    withRouter
}                       from "react-router-dom";
import Layout           from "../../commons/Components/Layout";
import GameContainer    from "./container/GameContainer";   

class Game extends Component {

    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <GameContainer/>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default withRouter(Game);
