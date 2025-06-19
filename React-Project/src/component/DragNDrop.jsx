import React, { useState } from 'react'
import '../css/dragdrop.css'

export default function DragNDrop() {
    const TODO = 'TODO'
    const DOING = 'DOING'
    const DONE = 'DONE'
    const [value, setValue] = useState('')
    const [task, setTask] = useState([])
    const [dragTask, setDragTask] = useState(null)
    const [updateItem, setUpdateItem] = useState(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (updateItem) {
                const obj = {
                    title: value,
                    status: updateItem.status,
                    id: updateItem.id,
                }
                let copytask = [...task]
                const filtered = copytask.filter((item) => item.id !== updateItem.id)

                setTask((prevTask) => [...filtered, obj])
                setUpdateItem(null)
            } else {
                const obj = {
                    title: value,
                    status: TODO,
                    id: Date.now()
                }
                setTask((prevTask) => [...prevTask, obj])
            }
            setValue('')
        }
    }
    const handleDrag = (task, e) => {
        setDragTask(task)
    }
    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDragNDrop = (status) => {
        let copyTask = [...task]
        copyTask = copyTask.map((item) => {
            if (dragTask.id === item.id) {
                item.status = status
            }
            return item
        })
        setTask(copyTask)
        setDragTask(null)

    }

    const handleOnDrop = (e) => {
        console.log(e.target.getAttribute('data-status'));
        const status = e.target.getAttribute('data-status')
        if (status === TODO) {
            handleDragNDrop(TODO)
        } else if (status === DOING) {
            handleDragNDrop(DOING)
        } else if (status === DONE) {
            handleDragNDrop(DONE)
        }

    }
    const deleteTask = (item) => {
        let copyTask = [...task]
        copyTask = copyTask.filter((task) => item.id !== task.id)
        setTask(copyTask)
    }

    const updateTask = (task) => {
        setUpdateItem(task)
        setValue(task.title)
    }

    return (
        <div className='drag-App'>
            <h1>Task Manager</h1>
            <input
                onChange={handleChange}
                type="text"
                value={value}
                onKeyDown={handleKeyDown}
            />
            <div className="task-container">
                <div
                    className="todo"
                    data-status='TODO'
                    onDrop={handleOnDrop}
                    onDragOver={handleDragOver}
                >
                    <h2 className='todo-col'>Todo</h2>
                    {
                        task.length > 0 && task.map((task) => (
                            task.status === TODO && <div
                                draggable
                                onDrag={(e) => handleDrag(task, e)}
                                className='task-item'
                                key={task.id}
                            >
                                {task.title}

                                <div>
                                    <span
                                        className='btn'
                                        onClick={(e) => updateTask(task)}
                                    >✏️</span>
                                    <span
                                        className='btn'
                                        onClick={(e) => deleteTask(task)}
                                    >🗑️</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="doing"
                    data-status='DOING'
                    onDrop={handleOnDrop}
                    onDragOver={handleDragOver}
                >
                    <h2 className='doing-col'>Doing</h2>
                    {
                        task.length > 0 && task.map((task) => (
                            task.status === DOING && <div

                                draggable
                                onDrag={(e) => handleDrag(task, e)}
                                className='task-item'
                                key={task.id}
                            >
                                {task.title}

                                <div>
                                    <span
                                        className='btn'
                                        onClick={(e) => updateTask(task)}
                                    >✏️</span>
                                    <span
                                        className='btn'
                                        onClick={(e) => deleteTask(task)}
                                    >🗑️</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="done"
                    data-status='DONE'
                    onDrop={handleOnDrop}
                    onDragOver={handleDragOver}
                >
                    <h2 className='done-col'>Done</h2>
                    {
                        task.length > 0 && task.map((task) => (
                            task.status === DONE && <div
                                draggable
                                onDrag={(e) => handleDrag(task, e)}
                                className='task-item'
                                key={task.id}
                            >
                                {task.title}

                                <div>
                                    <span
                                        className='btn'
                                        onClick={(e) => updateTask(task)}
                                    >✏️</span>
                                    <span
                                        className='btn'
                                        onClick={(e) => deleteTask(task)}
                                    >🗑️</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}



