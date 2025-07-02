import React, { useRef, useState } from 'react'

const Comments = ({comment,addReply}) => {
    const [isShowReply,setIsShowReply] = useState(false)
    const [replyText, setReplyText] =  useState('')
    const inputRef = useRef(null)

    const handleReply = ()=>{
        setIsShowReply(true)
        setTimeout(() => {
            inputRef.current.focus();
        }, 1);
    }
    const handleCancleReply = ()=>{
        setIsShowReply(false)
        setReplyText('')
    }
    const handleSaveReply =(commentId)=>{
        // console.log("Save Reply", commentId, replyText);
        addReply(commentId,replyText)
        setIsShowReply(false)
        setReplyText('')
        
    }
    const handleKeyDown = (e,commentId)=>{
        // console.log(e.key);
        
        if(e.key === 'Enter'){
            handleSaveReply(commentId)
        }else if(e.key === 'Escape'){
            handleCancleReply()
        }
    }

  return (
   <li key={Comment.id} className='comment-line'>
    {comment.display}
    {
        !isShowReply && (
            <button className='comment-btn' onClick={handleReply}>Reply</button>
        )
    }
    {
        isShowReply ? (
            <>
            <br />
            <input 
            type="text"
            className='input-reply'
            onChange={(e)=>setReplyText(e.target.value)}
            onKeyDown={(e)=>handleKeyDown(e,comment.id)}
            ref={inputRef}
            value={replyText}
            />
            <br />
            <button className='comment-btn'
             onClick={()=>handleSaveReply(comment.id)}
             >Save</button>
            <button
             className='comment-btn'
             onClick={handleCancleReply}
             >Cancle</button>
            </>
        ): null
    }
    {
        comment.children.length ? (
            <ul>
                {
                    comment.children.map((item)=>(
                        <Comments 
                        key={item.id}
                        comment={item}
                        addReply={addReply}
                        />
                    ))
                }
            </ul>
        ): null
    }
   </li>
  )
}

export default Comments
