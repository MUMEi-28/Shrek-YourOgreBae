import 'boxicons';
import Message from '../chat/Message';
import Reply from '../chat/Reply';
import SendMessage from '../chat/SendMessage';
import { conversationData } from '../../data/chat/conversationData';
import { useState, useEffect, useRef } from 'react';


import { getResponseFromMistral } from "../../data/chat/ai"

import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Chat()
{
    const location = useLocation();
    const selectedCharacter = location.state?.character || "Shrek";


    const [conversation, setConversation] = useState(conversationData);
    const [initialGreetingAdded, setInitialGreetingAdded] = useState(false);

    // Scroll after sending messages
    const conversationEndRef = useRef(null);
    useEffect(() =>
    {
        conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversation]);

    // Add initial greeting from AI
    useEffect(() =>
    {
        if (!initialGreetingAdded)
        {
            async function fetchInitialGreeting()
            {
                try
                {
                    const initialGreeting = await getResponseFromMistral("This is the initial greeting, I want you to greet me and ask something");
                    setConversation(prevConvo => [
                        ...prevConvo,
                        { category: 'AI', message: initialGreeting || "Hi there! How can I make your day better today? 😊" }
                    ]);
                } catch (error)
                {
                    console.error("Error fetching initial greeting:", error);
                    setConversation(prevConvo => [
                        ...prevConvo,
                        { category: 'AI', message: "Hi there! How can I make your day better today? 😊" }
                    ]);
                } finally
                {
                    setInitialGreetingAdded(true);
                }
            }

            fetchInitialGreeting();
        }
    }, [initialGreetingAdded]);

    async function addMessage(event)
    {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userMessage = formData.get('message');

        if (!userMessage.trim()) return;

        setConversation(prevConvo => [
            ...prevConvo,
            { category: 'user', message: userMessage }
        ]);

        event.currentTarget.reset();

        setTimeout(() =>
        {
            setConversation(prevConvo => [
                ...prevConvo,
                { category: 'AI', message: "Typing..." }
            ]);

            getAIResponse(userMessage);
        }, 500);
    }

    async function getAIResponse(userMessage)
    {
        try
        {

            const aiResponse = await getResponseFromMistral(userMessage, selectedCharacter);


            setConversation(prevConvo => prevConvo.map((msg, index) =>
                index === prevConvo.length - 1
                    ? { category: "AI", message: aiResponse || "I'm sorry, I couldn't generate a response." }
                    : msg
            ));

        } catch (error)
        {
            console.error("Error fetching AI response:", error);

            setConversation(prevConvo => prevConvo.map((msg, index) =>
                index === prevConvo.length - 1
                    ? { category: "AI", message: "Failed to fetch response. Please try again." }
                    : msg
            ));
        }
    }

    return (

        <div className='absolute min-w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-green-700 p-6'>
            {/* Chat Container */}
            <section className="border bg-yellow-100 w-96 h-[600px] flex flex-col shadow-xl rounded-2xl overflow-hidden">
                {/* Header */}
                <header className="bg-gradient-to-r from-green-800 to-green-600 text-white p-4 flex items-center justify-center text-2xl font-bold">

                    <h1>{selectedCharacter}</h1>
                </header>

                {/* Chat Messages */}
                <main className='flex flex-col flex-grow p-4 overflow-y-auto space-y-3'>
                    {conversation.map((convo, index) =>
                        convo.category === "user" ? (
                            <Message key={index} text={convo.message} />
                        ) : (
                            <Reply key={index} text={convo.message} />
                        )
                    )}
                    <div ref={conversationEndRef} />
                </main>

                {/* Message Input */}
                <form onSubmit={addMessage} className='flex flex-row items-center p-2 border-t bg-green-200'>
                    <input
                        type="text"
                        className='border flex-grow p-2 rounded-full outline-none focus:ring-2 focus:ring-green-500 bg-white'
                        placeholder='Type a message...'
                        name='message'
                    />
                    <button
                        className='border ml-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition'>
                        Send
                    </button>
                </form>
            </section>

            {/* Back Button */}
            <Link to='/choose'
                className='border mt-4 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition'
            ><button > Back</button></Link>

        </div>
    );
}