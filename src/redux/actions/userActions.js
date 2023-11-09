import axios from "axios";

// ACCIONES DE LOGIN 
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


// ACCIONES DE REGISTER 
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const login = ({username, password}) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        try {
            const response = await fetch("http://localhost:80/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({password, username }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Respuesta del inicio de sesión:", data);
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                return data;
            } else {
                const error = await response.json();
                console.log("Error de inicio de sesión:", error);
                dispatch({ type: LOGIN_FAILURE, payload: error.message });
            }
        } catch (error) {
            console.log("Error de inicio de sesión:", error);
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        }
    };
};

export const register = (userData) => {
    return async (dispatch) => {
      dispatch({ type: REGISTER_REQUEST });
  
      try {
        const response = await axios.post('http://localhost:80/api/register', userData);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        console.log("USUARIO REGISTRADO CON EXITO", response.data)
        return response
      } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
        console.log("NO SE PUDO REGISTRAR ", error.message )

      }
    };
  };
