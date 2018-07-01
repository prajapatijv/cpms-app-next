const requestUsersType = 'REQUEST_USERS';
const receiveUsersType = 'RECEIVE_USERS';
const selectUserType = 'SELECT_USER';

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

    switch (action.type) {
        case requestUsersType: {
            return {
                ...state,
                isLoading: true
            };
        }
        case receiveUsersType: {
            return {
                ...state,
                users: action.users,
                isLoading: false
            };
        }
        default:
            return state;
    }
};
