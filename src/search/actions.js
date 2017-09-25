import * as actionTypes from './constants'
import fetch from '../common/fetch'

export function setSelectedMake(makeId) {
    return {
        type: actionTypes.SET_SELECTED_MAKE,
        payload: makeId
    }
}
export function getMakeList() {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_MAKE_LIST_REQUEST
        })
        fetch('/makes')
            .then(response =>
                dispatch({
                    type: actionTypes.GET_MAKE_LIST_SUCCESS,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: actionTypes.GET_MAKE_LIST_FAILURE,
                })
            )
    }
}

export function setSelectedModel(modelId) {
    return {
        type: actionTypes.SET_SELECTED_MODEL,
        payload: modelId
    }
}

export function getModelList(makeId) {
    makeId = parseInt(makeId)
    return dispatch => {
        dispatch({
            type: actionTypes.GET_MODEL_LIST_REQUEST
        })
        fetch(`/modelsByMake/${makeId}`)
            .then(response =>
                dispatch({
                    type: actionTypes.GET_MODEL_LIST_SUCCESS,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: actionTypes.GET_MODEL_LIST_FAILURE,
                })
            )
    }
}

export function getModelDetails(modelId) {
    modelId = parseInt(modelId)
    return dispatch => {
        dispatch({
            type: actionTypes.GET_MODEL_DETAILS_REQUEST
        })
        fetch(`/models/${modelId}`)
            .then(response =>
                dispatch({
                    type: actionTypes.GET_MODEL_DETAILS_SUCCESS,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: actionTypes.GET_MODEL_DETAILS_FAILURE,
                })
            )
    }
}