import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

const instance = axios.create({
	baseURL: baseURL
})

export default instance