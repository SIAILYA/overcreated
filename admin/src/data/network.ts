import axios from "axios";

export const BASE_HOST = import.meta.env.PROD ? "https://samolyev.ru" : "http://localhost:5000";

export const axiosInstance = axios.create({
    baseURL: `${BASE_HOST}/api/v3/admin`,
    headers: {
        "Content-Type": "application/json",
    }
})

export function parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
