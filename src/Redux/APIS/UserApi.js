import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

let params = (new URL(document.location)).searchParams;
let name = params.get("token");

export const userLoginApi = async (userLogin) =>
    await axios.post(`http://localhost:8080/api/user/login`, userLogin)

export const createUserApi = async (user) =>
        await axios.post('http://localhost:8080/api/user/create', user)

export const userLogoutApi = async () =>
    await axios.post(`http://localhost:8080/api/user/logout`, { headers: headersParam })

export const userChangePasswordApi = async (userChangePassword) =>
    await axios.post('http://localhost:8080/api/user/change_password', userChangePassword, { headers: headersParam })

export const userResetPasswordApi = async (userResetPassword) =>
    await axios.post(`http://localhost:8080/api/user/reset_password/${name}`, userResetPassword)

export const userForgotPasswordApi = async (userForgotPassword) =>
    await axios.post('http://localhost:8080/api/user/forgot_password', userForgotPassword)



