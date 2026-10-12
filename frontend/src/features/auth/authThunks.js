import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure
} from "./authSlice";

import api from "../../services/axios";


// ========================================
// LOGIN
// ========================================

export const loginUser = (loginData) => async (dispatch) => {

    try {

        dispatch(loginStart());

        const response = await api.post(
            "/auth/login",
            loginData
        );

        dispatch(
            loginSuccess(response.data)
        );

        return response.data;

    } catch (error) {

        const message =
            error.response?.data?.message ||
            "Login failed";

        dispatch(loginFailure(message));

        throw error;
    }
};


// ========================================
// REGISTER
// ========================================

export const registerUser = (registerData) => async (dispatch) => {

    try {

        dispatch(registerStart());

        const response = await api.post(
            "/auth/register",
            registerData
        );

        dispatch(registerSuccess());

        return response.data;

    } catch (error) {

        const message =
            error.response?.data?.message ||
            "Registration failed";

        dispatch(registerFailure(message));

        throw error;
    }
};


// ========================================
// GET CURRENT USER
// ========================================

export const getCurrentUser = () => async (dispatch) => {

    try {

        const response = await api.get(
            "/auth/me"
        );

        dispatch(
            loginSuccess(response.data)
        );

        return response.data;

    } catch (error) {

        dispatch(
            loginFailure(null)
        );

        throw error;
    }
};


// ========================================
// LOGOUT
// ========================================

export const logoutUser = () => async (dispatch) => {

    try {

        await api.post("/auth/logout");

    } finally {

        dispatch(logout());
    }
};