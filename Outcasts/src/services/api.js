import axios from "axios"

const api = axios.create({
baseURL: "http://localhost:3000",
timeout: 5000
})

export async function fetchPosts(page = 1) {
const res = await api.get(`/posts?page=${page}`)
return res.data
}

export default api
