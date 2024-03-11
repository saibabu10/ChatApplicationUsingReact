import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ChatComponent from './components/ChatComponent'

function App() {
  const [user, setUser] = useState('Sai')

  return (
    <div className="App">
      <ChatComponent user={user}/>
    </div>
  )
}

export default App
