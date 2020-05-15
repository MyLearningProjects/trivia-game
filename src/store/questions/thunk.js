import ApiService from "../../api/api.Service"

import {
    fetchngQuestions,
    setQuestions,
    fetchQuestionFailed
} from "./actions";

export const fetchQuestion = (params) => async dispatch => {
    try{
        dispatch(fetchngQuestions());
        const {results = []} = await ApiService.getQuestionList(params)
        dispatch(setQuestions(results))
    }catch (error){
        dispatch(fetchQuestionFailed())
    }
}