import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ChatPage = () => {
    const [chats, setChats] = useState([])

    const fetchChat = async () => {
        const { data } = await axios.get('http://localhost:5000/api/chat');
        console.log(data);
        setChats(data);
    }

    useEffect(() => {
        fetchChat();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    )
}

export default ChatPage