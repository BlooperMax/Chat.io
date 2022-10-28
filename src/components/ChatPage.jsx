import { useEffect, useState } from "react"
import socket from "../config/socket"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const ChatPage = ({name})  => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
      
        socket.on('chat message', data => {
            setMessages([...messages,data])
        } )
      
    }, [messages])
    

    const[value,handleForm,reset]=useForm({
        msg:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chat message',{name,content:value.msg});
        reset()
    }

    return (
        <div
            className="chat"
        >

            <ul
                className="chat-msgs"
            >

                {messages.map((message,i) => <Message key={i} {...message} />)}

            </ul>

            <form
                className="form-chat"
                onSubmit={handleSubmit}

            >
                
                <input 
                    className="input-text"
                    autoComplete="off"
                    placeholder="Escribe un mensaje aqui..."
                    type="text" 
                    name="msg"
                    value={value.msg}
                    onChange={handleForm}
                />

                <input 
                    className="button"
                    type="submit" 
                />
            </form>
        </div>    

    )
  }