import {
    CHANGE_SEARCH_FIELD_RENTAL,
    REQUEST_RENTALS_PENDING,
    REQUEST_RENTALS_SUCCESS,
    REQUEST_RENTALS_FAILED
} from './constants';

const initialStateSearch = {
    searchFieldRental: '',
}

const initialStateRentals = {
    rentals: [],
    isPending: false,
    error: ''
}

export const searchRentals = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD_RENTAL:
            return {...state, searchFieldRental: action.payload }
        default:
            return state;
    }
}

export const requestRentals = (state = initialStateRentals, action = {}) => {
    switch (action.type) {
        case REQUEST_RENTALS_PENDING:
            return {...state, isPending: true };
        case REQUEST_RENTALS_SUCCESS:
            return {...state, rentals: action.payload, isPending: false }
        case REQUEST_RENTALS_FAILED:
            return {...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}