import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../api/axios'

interface Todo {
    id: number
    title: string
    completed: boolean
}

const TodoList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold text-red-500'>Todo List</h1>
            {data.map((todo: Todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    )
}

export default TodoList