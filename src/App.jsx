import { useEffect, useState } from 'react'
import './App.css'
import socket from './config/socket';
import { UserPage } from './components/UserPage';
import { ChatPage } from './components/ChatPage';

const App = ()  => {
  const [name, setName] = useState( localStorage.getItem('name') || undefined );

  useEffect(() => {
    
    socket.on('message',()=>{
      console.log('a')
    })
    
  }, [])
  

  return (
    <div className="app">

      {
        (!name)?
                <UserPage
                  setName={setName}
                />
              :
              <ChatPage
                name={name}
              />
      }


    </div>
  )
}

export default App
