import * as actionTypes from './constants'
import fetch from '../common/fetch'

export function getCarOfTheWeek() {
    return dispatch => {
        dispatch({
            type: actionTypes.CAR_OF_THE_WEEK_REQUEST
        })
        fetch('/carOfTheWeek')
            .then(response => 
                dispatch({
                    type: actionTypes.CAR_OF_THE_WEEK_SUCCESS,
                    payload: response
                })
            )
            .catch(error =>
                dispatch({
                    type: actionTypes.CAR_OF_THE_WEEK_FAILURE,
                })
            )
    }
}