import {
    CHANGE_SEARCH_FIELD_RENTAL,
    REQUEST_RENTALS_PENDING,
    REQUEST_RENTALS_SUCCESS,
    REQUEST_RENTALS_FAILED
} from './constants';

export const setSearchFieldRentals = (text) => ({
    type: CHANGE_SEARCH_FIELD_RENTAL,
    payload: text
})

export const requestRentals = () => (dispatch) => {
    dispatch({ type: REQUEST_RENTALS_PENDING });
    //express call to backend for rentals
    //.then(data => dispatch({ type: REQUEST_RENTALS_SUCCESS, payload: data}))
    //.catch(error => dispatch({ type: REQUEST_RENTALS_FAILED, payload: error}))
}