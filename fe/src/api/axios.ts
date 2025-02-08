import axios from "axios"

const API_URL = "http://localhost:8080"

interface Todo {
    id: number
    title: string
    completed: boolean
}

export const getTodos = async () => {
    const response = await axios.get(`${API_URL}/todos`)
    return response.data
}

export const createTodo = async (todo: Todo) => {
    const response = await axios.post(`${API_URL}/todos`, todo)
    return response.data
}
