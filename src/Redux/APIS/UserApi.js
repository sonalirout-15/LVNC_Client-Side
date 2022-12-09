import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const userLoginApi = async (user) =>
    await axios.post(`http://localhost:8080/api/user/login`, user)

export const userLogoutApi = async () =>
    await axios.post(`http://localhost:8080/api/user/logout`, { headers: headersParam })

export const userChangePasswordApi = async (userPassword) =>
    await axios.post('http://localhost:8080/api/user/change_password', userPassword, { headers: headersParam })

export const userResetPasswordApi = async (userPassword) =>
    await axios.post(`http://localhost:8080/api/user/reset_password/${token}`, userPassword, { headers: headersParam })

export const userForgotPasswordApi = async (userPassword) =>
    await axios.post('http://localhost:8080/api/user/forgot_password', userPassword, { headers: headersParam })

export const createUserApi = async (user) =>
    await axios.post('http://localhost:8080/api/user/create', user, { headers: headersParam })


