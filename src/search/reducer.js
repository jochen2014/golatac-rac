import * as actionTypes from './constants'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_MAKE:
            //when selecting a new make, we also need to
            //reset model selection and model list
            return Object.assign({}, state, {
                selectedMake:action.payload,
                selectedModel:'',
                modelList:undefined
            })
        case actionTypes.GET_MAKE_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true })
        case actionTypes.GET_MAKE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                makeList: action.payload
            })
        case actionTypes.GET_MAKE_LIST_FAILURE:
            return Object.assign({}, state, {
                error: true,
                isFetching: false
            })

        case actionTypes.SET_SELECTED_MODEL:
            return Object.assign({}, state, {
                selectedModel:action.payload
            })
        case actionTypes.GET_MODEL_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true })
        case actionTypes.GET_MODEL_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                modelList: action.payload.models
            })
        case actionTypes.GET_MODEL_LIST_FAILURE:
            return Object.assign({}, state, {
                error: true,
                isFetching: false
            })



        case actionTypes.GET_MODEL_DETAILS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true })
        case actionTypes.GET_MODEL_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                modelDetails: action.payload.model
            })
        case actionTypes.GET_MODEL_DETAILS_FAILURE:
            return Object.assign({}, state, {
                error: true,
                isFetching: false
            })
        default:
            return state
    }
}