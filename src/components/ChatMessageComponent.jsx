import React from 'react'

function ChatMessageComponent({text,logo,email,user}) {
  return (
    <div className={`d-flex ${email===user.email && "justify-content"}`}>
      {
        user.email===email ? (
          <span className='message-right'>
            <span className='message-text'>{text}</span>
            <img src={logo} alt="logo" className='logo-icon'/>
          </span>
        ) : (
          <span className='message-left'>
          <img src={logo} alt="logo" className='logo-icon'/>
          <span className='message-text'>{text}</span>
        </span>
        )
      }
    </div>
  )
}

export default ChatMessageComponent