import React from 'react'
import {
    Row,
    Col
}                   from "reactstrap";

export default function HowToPlay() {
    return (
        <>
            <Row>
                <Col xs="12" className="text-center">
                    <h1 className="box-container">Welcome To Trivia Game</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <div className="box-container">
                        <h5 className="text-left">How to Play Game</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <ul>
                            <li>Select Category</li>
                            <li>Select Level</li>
                            <li>Select number of question</li>
                        </ul>
                        <p>Note : you will get only 1 minute to answer a question </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}
