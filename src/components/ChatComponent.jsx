import React, { useState } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../config/fire'
function ChatComponent({user}) {
    const [messages,setMessages] = useState([]);
    const[text,setText] = useState('')
    const messageRef = collection(db, "messages"); 
    const handleSubmit=async()=>{
        const date = new Date();
        await addDoc(messageRef,{
            text,
            email:'shivasaibabu10@gmail.com',
            logo:'',
            date
        })
        setText("")
        setTimeout(()=>document.querySelector('#selector').scrollIntoView({behavior:'smooth'}),0.5)
    }
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
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
                <div className='d-flex mt-2'>
                    <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button className='btn btn-primary ms-3' onClick={handleSubmit}>Send</button>
                    {/* <div id="selector"></div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatComponent