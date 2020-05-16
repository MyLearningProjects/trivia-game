import React from 'react';
import {
    Row,
    Col
}                   from "reactstrap";

export default function ResultComponent({
    score,
    category,
    difficulty
}) {
    return (
        <>
            <Row>
                <Col xs="12" className="text-center">
                    <h1 className="box-container">Result of the game you played</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <div className="box-container">
                        <h5>Category : <span className="font-weight-lighter">{category}</span></h5>
                        <h5>Difficulty : <span className="font-weight-lighter">{difficulty}</span></h5>
                        <h5>Score :</h5>
                        <ul>
                            <li>
                                <p>Correct Answer : {score.right}</p>
                            </li>
                            <li>
                                <p>Incorrect Answer : {score.wrong}</p>
                            </li>
                            <li>
                                <p>Not Attempted: {score.notAttempted}</p>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}
