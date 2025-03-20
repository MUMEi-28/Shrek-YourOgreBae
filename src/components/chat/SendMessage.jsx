import React, { useState } from 'react'
import { conversationData } from '../../data/chat/conversationData';

export default function SendMessage()
{

    const [userMessage, setUserMessage] = useState([])


    function handleSubmit(event)
    {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const message = formData.get('message');


        // If there is no value on message then stop executing
        if (!message.trim()) return;
        console.log(userMessage)
        setUserMessage('')

    }

    return (
        <form action="" className='flex flex-row items-center p-2 border-t'
            onSubmit={handleSubmit}
        >
            <input type="text"
                className='border flex-grow p-2 rounded-full outline-none focus:ring-2 focus:ring-pink-400'
                placeholder='Type a message...'
                name='message'
                onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
                className='border ml-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition'>
                Send
            </button>
        </form>
    )
}
