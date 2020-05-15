import  { ACTION_TYPES } from "./actions";

const initialState =  {
    isFetching : false,
    questions : null,
    error : null
};

const questionReducer = (state = initialState, action) => {
	switch (action.type){
    
        case ACTION_TYPES.QUESTIONS_FETCHING : 
            return {
                ...state,
                isFetching : true
            } 

        case ACTION_TYPES.QUESTIONS_FETCHED : 
            return {
                ...state,
                isFetching : false,
                questions : action.payload.results,
                error : null
            } 

        case ACTION_TYPES.QUESTIONS_FETCHING_FAILED : 
            return {
                ...state,
                isFetching : false,
                questions : null,
                error : action.payload.error
            } 

		default : 
			return state;
	}
}

export default questionReducer;

