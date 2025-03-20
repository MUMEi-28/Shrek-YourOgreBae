import 'boxicons'

import Message from '../chat/Message'
import Reply from '../chat/Reply'
import SendMessage from '../chat/SendMessage'

import { conversationData } from '../../data/chat/conversationData'
import { useState, useEffect, useRef } from 'react';

import { getResponseFromMistral } from "../../data/chat/ai"

import React from 'react'
import { Link } from 'react-router-dom'

export default function AphroditeChat()
{
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
            const aiResponse = await getResponseFromMistral(userMessage);

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
        <div className='absolute min-w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-600 via-purple-500 to-red-500'>
            <section className="border bg-white w-96 h-[600px] flex flex-col shadow-xl rounded-2xl overflow-hidden">
                <header className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white p-4 flex items-center justify-center text-2xl font-bold">
                    <h1>Aphrodite AI</h1>
                    <box-icon name="bot" className="ml-2"></box-icon>
                </header>
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
                <form onSubmit={addMessage} className='flex flex-row items-center p-2 border-t bg-gray-100'>
                    <input type="text"
                        className='border flex-grow p-2 rounded-full outline-none focus:ring-2 focus:ring-pink-400'
                        placeholder='Type a message...'
                        name='message'
                    />
                    <button
                        className='border ml-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition'>
                        Send
                    </button>
                </form>
            </section>
            <button
                className='border mt-4 bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition'>
                <Link to='..'>Back</Link>
            </button>



        </div>
    );

}
