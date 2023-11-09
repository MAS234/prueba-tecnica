import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "../actions/userActions"

const initialState = {
    user:{
      username: null, 
    },
    loading: false,
    error: null,
    registering: false,
    registered: false,
  };


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: {
            ...state.user,
            username: action.payload.username // Estableces el nombre de usuario desde la acción
          }
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case REGISTER_REQUEST:
        return {
          ...state,
          registering: true,
          error: null
        }; 
      case REGISTER_SUCCESS:
        return {
          ...state,
          registering: false,
          registered: true
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          registering: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  
  export default userReducer;