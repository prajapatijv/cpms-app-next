const requestUsers = 'REQUEST_USERS';
const receiveUsers = 'RECEIVE_USERS';
const initialState = { users: [], isLoading: false };

export const actionCreators = {
    requestUsers: () => async (dispatch, getState) => {

        dispatch({ type: requestUsers });

        const url = `api/user/getUsers`;
        const response = await fetch(url);
        const users = await response.json();
        dispatch({ type: receiveUsers, users });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestUsers) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveUsers) {
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }

    return state;
};
