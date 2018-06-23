﻿const requestUsersType = 'REQUEST_USERS';
const receiveUsersType = 'RECEIVE_USERS';
const initialState = { users: [], isLoading: false };

export const actionCreators = {
    requestUsers: () => async (dispatch, getState) => {
        dispatch({ type: requestUsersType });

        const url = `api/user/getusers`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: receiveUsersType, users });
    }
};


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestUsersType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveUsersType) {
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }

    return state;
};
