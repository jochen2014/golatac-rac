import * as actionTypes from './constants'

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.CAR_OF_THE_WEEK_REQUEST:
            return Object.assign({},state, {isFetching: true })
        case actionTypes.CAR_OF_THE_WEEK_SUCCESS:
            return Object.assign({}, state,{
                isFetching: false,
                carOfTheWeek: action.payload
            })
        case actionTypes.CAR_OF_THE_WEEK_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            })
        default:
            return state
    }
}