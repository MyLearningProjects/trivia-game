import React, { Component } from 'react'
import {
    Row,
    Col,
    Button
}                   from "reactstrap";

export default class GameComponent extends Component {

    state = {
        activeIndex : 0,
        seconds : 60,
        minutes : 0
    }

    componentDidMount(){
        this.handleTimer()
    }

    componentWillUnmount(){
        clearInterval(this.handleTimer)
    }

    questionCounter = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                activeIndex : prevState.activeIndex + 1
            }
        })
    }

    resetTimer = () => {
        this.setState({
            seconds : 60,
            minutes : 0
        })
    }

    handleTimer = () => {
        setInterval(() => {
            const { seconds, minutes } = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.handleSelection("");
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    handleSelection = (selectedOption) => {
        const {
            activeIndex
        } = this.state
        let {
            questions,
            score 
        } = this.props
        if(questions[activeIndex].correct_answer === selectedOption){
            console.log("Correct");
            score.right += 1;
        }else if(selectedOption === ""){
            console.log("Not Attempted");
            score.notAttempted += 1;
        } else{
            console.log("wrong answer");
            score.wrong += 1;
        }
        if(activeIndex === questions.length-1){
            this.props.handleUpdate({score})
            this.props.screenCounter()
        }else{
            this.props.handleUpdate({score})
            this.questionCounter();
            this.resetTimer();
        }
    }

    renderTimer = () => {
        const { minutes, seconds } = this.state
        return (
            <div className="clock-timer">
                { minutes === 0 && seconds === 0
                    ? <h1>Time Out!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }

    renderQuestions = () => {
        const {
            questions
        } = this.props
        const {
            activeIndex
        } = this.state
        return questions.map((question,index) => {
            if(activeIndex === index){
                return(
                    <div key={`question ${index}`} >
                        <Row>
                            <Col xs="12">
                                <h4 className="box-container" dangerouslySetInnerHTML={{__html: question.question}}/>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.renderOptions(question.options)
                            }
                        </Row>
                    </div>
                )
            }else{
                return null
            }
        })
    }

    renderOptions = (options) => {
        return options.map((option,index) => {
            return(
                <Col xs="6" key={`option${option}${index}`}>
                    <div className="box-container"> 
                        <Button
                            color = "default"
                            onClick = {() => {this.handleSelection(option)}}
                        >
                            <div dangerouslySetInnerHTML={{__html: `${index + 1}.  ${option}`}}/>
                        </Button>
                    </div>
                </Col>
            )
        })
    }


    render() {
        return (
            <div className="questionBox mt-5 p-5">
                {this.renderTimer()}
                {this.renderQuestions()}
            </div>
        )
    }
}
