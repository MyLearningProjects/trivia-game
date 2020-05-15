export const ACTION_TYPES = {
    QUESTIONS_FETCHING : "FETCHING QUESTIONS",
    QUESTIONS_FETCHED : "FETCHED QUESTIONS",
    QUESTIONS_FETCHING_FAILED : "FETCHING QUESTION FAILED"
}

export const fetchngQuestions = () => ({
    type: ACTION_TYPES.QUESTIONS_FETCHING,
	payload: {},
})

export const setQuestions = (results) => ({
    type: ACTION_TYPES.QUESTIONS_FETCHED,
	payload: { results },
})

export const fetchQuestionFailed = (error) => ({
    type: ACTION_TYPES.QUESTIONS_FETCHING_FAILED,
	payload: { error },
})

