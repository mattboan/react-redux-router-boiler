// Define the auth reducer init state
const INIT_STATE = {};

// Define the auth reducer
export const AuthReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
            };
        case 'LOGOUT':
            return {
                ...state,
            };
        default:
            return state;
    }
};
