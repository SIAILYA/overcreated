// @ts-ignore
const BACKEND_PORT = import.meta.env.VITE_PORT || 5000
export const BACKEND = `http://localhost:${BACKEND_PORT}`
export const API = "/api/"
export const BACK_API = BACKEND + API
