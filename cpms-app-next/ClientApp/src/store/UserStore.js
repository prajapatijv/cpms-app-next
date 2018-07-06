const REQUSER_USERS = 'REQUEST_USERS';
const RECEIVE_USERS = 'RECEIVE_USERS';
const SELECT_USER = 'SELECT_USER';
const DELETE_USER = 'DELETE_USER';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const SAVE_USER = 'SAVE_USER';
const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';

const initialState = { users: [], isLoading: false };

export const actionCreators = {
    loadUsers: () => async (dispatch, getState) => {
        dispatch({ type: REQUSER_USERS});

        debugger;
        const url = `api/user/getUsers`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: RECEIVE_USERS, users });
    },

    onSelectUser: (selectedUser) => ({ type: SELECT_USER, selectedUser })

    /*onDelete: (user) => async (dispatch, getState) => {
        dispatch({ type: DELETE_USER });

        const url = `api/user`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: DELETE_USER_SUCCESS, user });
    },

    onSubmit: (user) => async (dispatch, getState) => {
        dispatch({ type: SAVE_USER });

        const url = `api/user`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: SAVE_USER_SUCCESS, user });
    }*/
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
                isLoading: false
            };
        }
        case SELECT_USER: {
            return {
                ...state,
                selectedUser: action.selectedUser
            };
        }
        default:
            return state;
    }
};
