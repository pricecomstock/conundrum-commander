import axios from 'axios'

const baseURL = 'http://localhost:3001/api'

const instance = axios.create({
	baseURL: baseURL,
	timeout: 1000
})

export default instance