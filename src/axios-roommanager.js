import axios from 'axios'

const baseURL = 'http://localhost:3000/api'

const instance = axios.create({
	baseURL: baseURL,
	timeout: 1000
})

instance.interceptors.request.use((req) => console.log(req))

export default instance