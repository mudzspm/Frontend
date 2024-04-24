import { api } from "./axios"
import { signupDto } from "./dtos/auth"

export const AuthAPI = {
  signup: async function (payload: signupDto) {
    const response = await api.request({
      url: "/auth/signup",
      method: "POST",
      data: payload
    })
    return response.data
  },
}