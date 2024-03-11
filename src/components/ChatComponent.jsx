import React, { useState } from 'react'

function ChatComponent({user}) {
    const [messages,setMessages] = useState([]);
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center p-4'>
            <h2 className='text-primary'>Chat Application</h2>
        </div>
        <div className='row mt-4'>
            <div className='col-xl-4 col-lg-4 col-sm-3 col-2'></div>
            <div className='col-xl-4 col-lg-4 col-sm-6  col-8 chat-message'>
                {
                    messages.map(message=>(
                        <ChatMessageComponent {...message} user={user}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ChatComponent