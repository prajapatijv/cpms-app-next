const REQUSER_USERS = 'REQUEST_USERS';
const RECEIVE_USERS = 'RECEIVE_USERS';
const SELECT_USER = 'SELECT_USER';

const initialState = { users: [], isLoading: false };

export const actionCreators = {
    requestUsers: () => async (dispatch, getState) => {
        dispatch({ type: REQUSER_USERS});

        const url = `api/user/getusers`;
        const response = await fetch(url);
        const users = await response.json();

        dispatch({ type: RECEIVE_USERS, users });
    },

    selectUser: () => ({ type: SELECT_USER })
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
            //debugger;
            console.log(action);
            return {
                ...state,
                user: {}
            };
        }
        default:
            return state;
    }
};
