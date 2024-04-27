import { api } from "./axios"
import { loginDto, signupDto } from "./dtos/auth"

export const AuthAPI = {
  signup: async function (payload: signupDto) {
    const response = await api.request({
      url: "/auth/signup",
      method: "POST",
      data: payload
    })
    return response.data
  },
  login: async function (payload: loginDto) {
    const response = await api.request({
      url: "/auth/login",
      method: "POST",
      data: payload
    })
    return response
  },
}