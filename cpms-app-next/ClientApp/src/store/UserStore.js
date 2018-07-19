﻿const REQUSER_USERS = 'REQUEST_USERS';
const RECEIVE_USERS = 'RECEIVE_USERS';
const SELECT_USER = 'SELECT_USER';
const DELETE_USER = 'DELETE_USER';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const SAVE_USER = 'SAVE_USER';
const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
const ADD_USER = 'ADD_USER';

const initialState = { users: [], isLoading: false };

export const actionCreators = {
    loadUsers: () => async (dispatch, getState) => {
        dispatch({ type: REQUSER_USERS });

        const url = `api/user`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: RECEIVE_USERS, users });
    },

    onAddUser: () => ({ type: ADD_USER }),

    onSelectUser: (selectedUser) => ({ type: SELECT_USER, selectedUser }),

    onDeleteUser: (user) => async (dispatch, getState) => {
        dispatch({ type: DELETE_USER });
        const url = `api/user`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const users = await response.json();

        dispatch({ type: DELETE_USER_SUCCESS, users });
    },

    onSubmitUser: (user) => async (dispatch, getState) => {
        dispatch({ type: SAVE_USER });
        const url = `api/user`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const users = await response.json();

        dispatch({ type: SAVE_USER_SUCCESS, users });
    },


};


export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case REQUSER_USERS: {
            return {
                ...state,
                isLoading: true
            };
        }
        case RECEIVE_USERS: {
            return {
                ...state,
                users: action.users,
                user: undefined,
                isLoading: false
            };
        }
        case SELECT_USER: {
            return {
                ...state,
                user: action.selectedUser
            };
        }
        case ADD_USER: {
            return {
                ...state,
                user: {}
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                user: action.selectedUser
            };
        }
        default:
            return state;
    }
};
