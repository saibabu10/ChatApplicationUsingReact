import React, { useEffect, useState } from 'react'
import {QuerySnapshot, addDoc,collection, onSnapshot} from 'firebase/firestore'
import {db} from '../config/fire'
import ChatMessageComponent from './ChatMessageComponent';
function ChatComponent({user}) {
    const [messages,setMessages] = useState([]);
    const[text,setText] = useState('')
    const messageRef = collection(db, "messages"); 
    const handleSubmit=async()=>{
        const date = new Date();
        await addDoc(messageRef,{
            text,
            email:'shivasaibabu10@gmail.com',
            logo:user.photoUrl,
            name:user.displayName,
            date
        })
        setText("")
        setTimeout(()=>document.querySelector('#selector').scrollIntoView({behavior:'smooth'}),0.5)
    }
    useEffect(()=>{
        const unsubscribe = onSnapshot(messageRef,(querySnapshot)=>{
            const newMessage = querySnapshot.docs.map((doc)=>doc.data()).sort((a,b)=>a.date-b.date);
            setMessages(newMessage)
        });
        return () => unsubscribe();
    },[]);
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
            <h2 className='text-primary'>Chat Application</h2>
        </div>
        <div className='row mt-4'>
            <div className='col-xl-4 col-lg-4 col-sm-3 col-2'></div>
            <div className='col-xl-4 col-lg-4 col-sm-6  col-8 chat-message'>
                {
        messages.map((message, index) => (
    <ChatMessageComponent key={index} {...message} user={user}/>
                    ))
                }
                <div className='d-flex mt-2'>
                    <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button className='btn btn-primary ms-3' onClick={handleSubmit}>Send</button>
                    <div id="selector"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatComponent