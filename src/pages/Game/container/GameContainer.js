import React, { Component } from 'react';
import {
    Row,
    Col
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
import Loader       from "../../../commons/Components/Loader"

class Game extends Component {

    state = {
        loading : true
    }

    componentDidMount(){
        this.getQuestions ();
    }

    getQuestions = () => {
        const {
            fetchQuestion
        } = this.props
        const params = {
            amount:20,
            category:9,
            difficulty:"easy",
            type:"multiple"
        }
        fetchQuestion(params)
        .then(() => {
            this.setState({loading : false})
        })
    }

    render() {
        console.log(this.props)
        const {
            loading
        } = this.state
        return (
            <>
                {
                    loading ? 
                    <Loader /> 
                    :
                    <h1>Trivia Game</h1>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    questionData : state.questions
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
