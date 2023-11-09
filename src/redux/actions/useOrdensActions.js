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

  
      axios.get(`http://localhost:80/api/pedidos/${username}`)
        .then((response) => {
            dispatch({
                type: FETCH_USER_ORDERS_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
          dispatch({
            type: FETCH_USER_ORDERS_FAILURE,
            payload: error.message
          });
        });
    };
  };

  // AGREGAR LOS PEDIDOS 
  export const addNewOrder = (orderData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("http://localhost:80/api/pedidos/agregar", orderData);
        dispatch({
          type: ADD_USER_ORDER_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        // Manejar errores, si es necesario
      }
    };
  };

  // PARA ELIMINAR LOS PEDIDOS
  export const deleteUserOrder = (orderId) => {
    return (dispatch) => {
      dispatch({ type: DELETE_USER_ORDER_REQUEST });
  
      axios.delete(`http://localhost:80/api/pedidos/${orderId}`)
        .then(() => {
          dispatch({
            type: DELETE_USER_ORDER_SUCCESS,
            payload: orderId
          });
          console.log("exitoso eliminacion")
        })
        .catch((error) => {
          dispatch({
            type: DELETE_USER_ORDER_FAILURE,
            payload: error.message
          });
          console.log("ERROR AL ELIMINAR")

        });
    };
  };
  