import axios, {AxiosRequestConfig} from 'axios'
import { UserInterface } from '../interface/interfaces'

const baseURL: string | undefined = process.env.REACT_APP_API_BASE_URL
const secret: string | undefined = process.env.REACT_APP_API_SECRET || "secret"

let config: AxiosRequestConfig | undefined
let configUpload: AxiosRequestConfig | undefined

if(secret !== undefined) {
  config = {
    headers: {
      "authorization": secret,
      "Content-Type": "application/json"
    }
  };
  configUpload = {
    headers: {
      "authorization": secret,
      "Content-Type": "application/json"
    }
  };
} else {
  console.error("ERROR: THE API_SECRET IS UNDEFINED.")
}


export async function register(data: {email: string }) {
  if(config !== undefined) {
    const responseData = await axios.post(`${baseURL}/register`, data, config)
      .then(response => response.status)
      .catch(error => error.response.status)

    return responseData
  }
}

export async function login(data: {email: string, password?: string, token?: string }): Promise<[number, any] | any[]> {
  if(config !== undefined) {
    const responseData: [number, object] | any[] = await axios.post(`${baseURL}/login`, data, config)
      .then(response => [response.status, response.data])
      .catch(error => [error.response.status, error.response.data])

    return responseData
  }
  return [500, { error: "Internal server error"}];
}

export async function CodeConfirmation(data: {email: string, name: string }): Promise<[number, any] | any[]> {
  if(config !== undefined) {
    const responseData: [number, object] | any[] = await axios.post(`${baseURL}/send_mail`, data, config)
      .then(response => [response.status, response.data])
      .catch(error => [error.response.status, error.response.data])

    return responseData
  }
  return [500, { error: "Internal server error"}];
}

export async function confirmCode(data: { code: string, hash: string }) {
  if(config !== undefined) {
    const responseData = await axios.post(`${baseURL}/confirm_code`, data, config)
      .then(response => response.status)
      .catch(error => error.response.status)

    return responseData
  }
}

// ================================= USER =================================

export async function createUser(data: UserInterface) {
  if(config !== undefined) {
    const responseData = await axios.post(`${baseURL}/users`, data, config)
      .then(response => response.status)
      .catch(error => error.response.status)

    return responseData
  }
}