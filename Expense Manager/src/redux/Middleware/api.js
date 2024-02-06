import axios from "axios";
import { toast } from 'react-hot-toast';
import * as actions from "../api";

const api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                if (action.type !== actions.apiCallBegan.type) return next(action);

                const { url, method, data, onStart, onSuccess, onError } =
                    action.payload;

                if (onStart) dispatch({ type: onStart });

                next(action);

                try {
                    const response = await axios.request({
                        baseURL: "http://localhost:3000/api/",
                        url,
                        method,
                        data,
                    })
                    // .then((res)=>{
                    //     if (url == '/user/login' && res) {
                    //        
                    //         
                    //         dispatch({ type: onSuccess, payload: response.data });
                    //         console.log(res);
                    //     }
                    // });

                    // General
                    dispatch(actions.apiCallSucess(response.data?.data));
                    // Specific
                    if (onSuccess) {
                        dispatch({ type: onSuccess, payload: response.data?.data });
                        if (method == 'post') {
                            toast(`Succesfully`, {
                                duration: 3000, // Display duration in milliseconds
                                position: 'top-center', // Toast position on the screen
                                style: {
                                    background: 'white', // Custom background color
                                    color: 'green', // Custom text color
                                },
                            });
                        }

                    }
                    //alert here 
                } catch (error) {
                    // General
                    dispatch(actions.apiCallFailed(error.message));

                    // Specific
                    if (onError) {

                        dispatch({ type: onError, payload: error.message });
                        toast(`${error.message}`, {
                            duration: 3000, // Display duration in milliseconds
                            position: 'top-center', // Toast position on the screen
                            style: {
                                background: 'white', // Custom background color
                                color: 'red', // Custom text color
                            },
                        });
                    }
                }
            };

export default api;