import React, { useState } from 'react'
import './Comments.css'
import Comments from './Comments'

function NestesComment() {
    const [input, setInput] = useState('')
    const [comments, setComments] = useState([
        {
            id: 1,
            display: 'hello',
            children: [
                {
                    id: 2,
                    display: 'Very nice',
                    children: [
                        {
                            id: 3,
                            display: 'Awesome',
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            display: 'Amazing',
            children: []
        },
    ])
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }
    const newComments = (text) => {
        return {
            id: new Date().getTime(),
            display: text,
            children: []
        }
    }
    const handleNestedComment = () => {
        if (input) {
            setComments([...comments, newComments(input)])
            setInput('')
        }
    }
    const addReply = (parentId, text) => {
        const copyComment = [...comments];
        addComments(copyComment, parentId, text)
    }
    const addComments = (comments, parentId, text) => {
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i]
            if (comment.id === parentId) {
                comment.children.unshift(newComments(text))
            }
        }
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i]
            addComments(comment.children,parentId,text)
        }
    }

    return (
        <div className='comment-App'>
            <h1>Nested Comments</h1>
            <div>
                <input
                    value={input}
                    type="text"
                    placeholder='your comments....'
                    className='input-box'
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <button
                    onClick={handleNestedComment}
                    className='comment-button'
                >
                    Comment
                </button>

            </div>
            <div>
                {
                    comments.map((item) => (
                        <Comments key={item.id}
                            comment={item}
                            addReply={addReply} />
                    ))
                }
            </div>
        </div>
    )
}

export default NestesComment
