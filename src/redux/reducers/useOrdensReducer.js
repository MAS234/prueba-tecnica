// userOrdersReducer.js
import * as ActionTypes from '../actions/useOrdensActions';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const userOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_ORDERS_REQUEST:
    case ActionTypes.ADD_USER_ORDER_REQUEST:
    case ActionTypes.DELETE_USER_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // Logica para ver pedido al estado  
    case ActionTypes.FETCH_USER_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };


    // Logica para agregar pedido al estado
    case ActionTypes.ADD_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    // Logica para eliminar pedido del estado
    case ActionTypes.DELETE_USER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        
      };

    case ActionTypes.FETCH_USER_ORDERS_FAILURE:
    case ActionTypes.ADD_USER_ORDER_FAILURE:
    case ActionTypes.DELETE_USER_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userOrdersReducer;
