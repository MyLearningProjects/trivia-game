import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Label,
}                   from "reactstrap";
import {
    CATEGORY_OPTIONS,
    DIFFICULTY_LEVEL, 
    QUESTION_NUMBER
}                   from "../../../commons/Constants";
import  Select      from 'react-select';

export default class GameOptionModal extends Component {

    state = {
        showModal : true,
        selected_category : "",
        selected_level : "",
        selected_number : ""
    }

    componentDidMount() {
        this.setState({
            selected_category : CATEGORY_OPTIONS[0],
            selected_level : DIFFICULTY_LEVEL[0],
            selected_number : QUESTION_NUMBER[0]
        })
    } 

    handleSave = () => {
        const {
            selected_category,
            selected_level,
            selected_number
        } = this.state
        this.props.handleOptionSelection({
            category : selected_category.value,
            difficulty : selected_level.value,
            amount : selected_number.value
        })
    }

    handleSelection = (tag,value) => {
        let obj = {}
        switch(tag){
            case "selected_category" : 
                obj["selected_category"] = value
                break;
            case "selected_level" : 
                obj["selected_level"] = value
                break;
            case "selected_number" : 
                obj["selected_number"] = value
                break;
            default : 
                obj = {}
        }
        this.setState(obj)
    }

    render() {
        const{
            showModal,
            selected_category,
            selected_level,
            selected_number
        } = this.state
        return (
            <Modal isOpen={showModal}>
                <ModalHeader>
                    Select the options to statr game
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs="12">
                            <Label>Select Category</Label>
                            <Select
                                value           ={selected_category}
                                onChange        = {(e) => {this.handleSelection("selected_category",e)}}
                                options         = {CATEGORY_OPTIONS}
                                isDisabled      = {false}
                                isSearchable    = {true}
                                placeholder     = {"Select Category"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Label>Select Level</Label>
                            <Select
                                value           ={selected_level}
                                onChange        = {(e) => {this.handleSelection("selected_level",e)}}
                                options         = {DIFFICULTY_LEVEL}
                                isDisabled      = {false}
                                isSearchable    = {true}
                                placeholder     = {"Select Category"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Label>Select No. of questions</Label>
                            <Select
                                value           ={selected_number}
                                onChange        = {(e) => {this.handleSelection("selected_number",e)}}
                                options         = {QUESTION_NUMBER}
                                isDisabled      = {false}
                                isSearchable    = {true}
                                placeholder     = {"Select Category"}
                            />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color = "primary"
                        onClick = {this.handleSave}
                    >
                        Continue
                    </Button>
                </ModalFooter> 
            </Modal>
        )
    }
}
