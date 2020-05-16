import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
}                   from "reactstrap";
import { 
    connect 
}                   from "react-redux";
import { 
    bindActionCreators, 
    compose 
}                   from "redux";
import {
    fetchQuestion
}                   from "../../../store/questions/thunk";
import {
    getQuestions,
    getDifficulty,
    getCategory
}                   from "../../../store/questions/getters";
import Loader       from "../../../commons/Components/Loader";
import HowToPlay    from "../component/HowToPlay";
import GameComponent from "../component/GameComponent";
import ResultComponent  from "../component/ResultComponent"; 
import GameOptionModal from "../component/GameOptionModal";   

const SCORE = {
    right : 0,
    wrong : 0,
    notAttempted : 0
}

class Game extends Component {

    state = {
        loading : false,
        activeScreen : 1,
        score : {...SCORE},
        showModal : false
    }


    handleScreen = () => {
        const {
            activeScreen,
        } = this.state

        if(activeScreen === 1){
            this.setState({showModal : true})
        }else if(activeScreen === 2){
            this.screenCounter();
        }else if(activeScreen === 3){
            this.props.history.push("/")
        }
    }

    handleOptionSelection = (newParams) => {
        this.setState({showModal : false})
        this.screenCounter();
        this.getQuestions (newParams);
    }

    screenCounter = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                activeScreen : prevState.activeScreen + 1
            }
        })
    }

    handleUpdate = (data) => {
        this.setState(data)
    }

    getQuestions = (newparams = {}) => {
        const {
            fetchQuestion
        } = this.props
        let params = {
            amount:3,
            category:15,
            difficulty:"easy",
            type:"multiple"
        }
        params = {...params,...newparams}
        this.setState({loading : true})
        fetchQuestion(params)
        .then(() => {
            this.setState({loading : false})
        })
    }

    render() {
        const {
            loading,
            activeScreen,
            score,
            showModal 
        } = this.state
        const {
            questions,
            category,
            difficulty
        } = this.props
        return (
            <>
                <Row>
                    <Col>
                        {
                            activeScreen === 2 && loading ? 
                                <Loader /> 
                            :
                            activeScreen === 1 ? 
                                <HowToPlay />
                            :
                            activeScreen === 2 ?
                                <GameComponent 
                                    questions = {questions}
                                    score = {score}
                                    handleUpdate = {this.handleUpdate}
                                    screenCounter = {this.screenCounter}
                                />
                            :
                            activeScreen === 3 ?
                                <ResultComponent
                                    score = {score}
                                    category = {category}
                                    difficulty = {difficulty}
                                />
                            :
                            null
                        }
                    </Col>
                </Row>
                {
                    activeScreen !== 2 || loading ? 
                        <Row>
                            <Col className ="text-right">
                                <Button 
                                    color = "primary" 
                                    disabled ={loading}
                                    onClick = {this.handleScreen}
                                >
                                    Next
                                </Button>  
                            </Col>
                        </Row> : null
                }
                {
                    showModal ? 
                    <GameOptionModal 
                        handleOptionSelection = {this.handleOptionSelection}
                    /> : null
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    difficulty : state && state.questions && state.questions.questions ?  getDifficulty(state.questions.questions) : "",
    category : state && state.questions && state.questions.questions ?  getCategory(state.questions.questions) : "",
    questions : state && state.questions && state.questions.questions ?  getQuestions(state.questions.questions) : "",
    isFetching : state && state.questions && state.questions.isFetching
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchQuestion : (params) =>  fetchQuestion(params)
		},
		dispatch
	);

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(Game);
