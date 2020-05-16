import {shuffleArray} from "../../utils/helper";

export const getQuestions = (questionState) => {
    let questions = []
    questionState.map((question,index) => {
        let data = {}
        data["question"] = question.question;
        data["correct_answer"] = question.correct_answer;
        question.incorrect_answers.push(question.correct_answer)
        data["options"] = shuffleArray(question.incorrect_answers)
        questions.push(data)
    })
    return questions
}

export const getDifficulty = (questionState) => {
    return questionState[0].difficulty
}

export const getCategory = (questionState) => {
    return questionState[0].category
}