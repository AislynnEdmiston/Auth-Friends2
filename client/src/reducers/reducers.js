import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from '../actions/actions'

const initalState = {
    friends: [], 
    error: '',
    isFetching: false
}

export const friendReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START: 
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                friends: action.payload
            };
        case FETCH_FRIENDS_FAILURE: 
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}