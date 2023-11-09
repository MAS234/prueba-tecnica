import axios from 'axios';

export const FETCH_USER_ORDERS_REQUEST = 'FETCH_USER_ORDERS_REQUEST';
export const FETCH_USER_ORDERS_SUCCESS = 'FETCH_USER_ORDERS_SUCCESS';
export const FETCH_USER_ORDERS_FAILURE = 'FETCH_USER_ORDERS_FAILURE';

export const ADD_USER_ORDER_REQUEST = 'ADD_USER_ORDER_REQUEST';
export const ADD_USER_ORDER_SUCCESS = 'ADD_USER_ORDER_SUCCESS';
export const ADD_USER_ORDER_FAILURE = 'ADD_USER_ORDER_FAILURE';

export const DELETE_USER_ORDER_REQUEST = 'DELETE_USER_ORDER_REQUEST';
export const DELETE_USER_ORDER_SUCCESS = 'DELETE_USER_ORDER_SUCCESS';
export const DELETE_USER_ORDER_FAILURE = 'DELETE_USER_ORDER_FAILURE';

// PARA VER LOS PEDIDOS 
export const fetchUserOrders = (username) => {
    return (dispatch) => {
      dispatch({ type: FETCH_USER_ORDERS_REQUEST });

      console.log("USUARIO NOMBRE",username)
  
      axios.get(`http://localhost:80/api/pedidos/${username}`)
        .then((response) => {
            dispatch({
                type: FETCH_USER_ORDERS_SUCCESS,
                payload: response.data
            });
            console.log(response.data)
        })
        .catch((error) => {
          dispatch({
            type: FETCH_USER_ORDERS_FAILURE,
            payload: error.message
          });
        });
    };
  };