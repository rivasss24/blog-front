
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case '[Auth] Login':
            return {
                ...state,
                logged: true,
            };

        case '[Auth] Logout':
            return {
                logged: false,
            };
    
        default:
            return state;
    }

}