import {
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM,
    CREATE_STREAM
} from '../actions/types'

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            return {}
        case DELETE_STREAM:
            return {}
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};