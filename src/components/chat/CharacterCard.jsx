import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import characterData from '../../data/chat/characterData';

export default function CharacterCard(props)
{

    const navigate = useNavigate();

    function handleChatClick()
    {
        const characterDetails = characterData.find((char) => char.name === props.character.name);
        const loveInterest = characterDetails?.loveInterest || "Shrek";

        navigate('/chat', { state: { character: props.character.name, loveInterest } });

        console.log(`Character: ${props.character.name}, Love Interest: ${loveInterest}`);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-green-700 p-6">
            <div className="bg-yellow-100 p-12 rounded-2xl shadow-2xl border-4 border-yellow-300 relative">
                {/* Close Button */}
                <button
                    onClick={props.handleBackClick}
                    className="cursor-pointer absolute bg-red-500 py-2 px-4 text-lg rounded-full font-bold text-white right-[-1rem] top-[-1rem] hover:bg-red-600 transition-all duration-200">
                    X
                </button>

                {/* Character Info */}
                <div className="flex flex-row gap-8 flex-wrap items-center justify-center">
                    {/* Character Image */}
                    <img
                        src={props.character.image}
                        alt={props.character.name}
                        className="w-48 h-48 rounded-2xl border-4 border-green-800 object-cover"
                    />

                    {/* Character Details */}
                    <div className="flex flex-col justify-between text-lg text-green-900">
                        <h3>
                            <span className="font-bold">Name:</span> {props.character.name}
                        </h3>
                        <p>
                            <span className="font-bold">Title:</span> {characterData.find((char) => char.name === props.character.name)?.title}
                        </p>
                        <p>
                            <span className="font-bold">Personality:</span> {characterData.find((char) => char.name === props.character.name)?.personality}
                        </p>
                        <p>
                            <span className="font-bold">Love Interest:</span> {characterData.find((char) => char.name === props.character.name)?.loveInterest}
                        </p>
                        <p className="italic text-green-800 mt-9">
                            "{characterData.find((char) => char.name === props.character.name)?.quote}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Chat Button */}
            <button
                onClick={() => handleChatClick()}
                className="bg-green-500 px-8 py-3 text-lg font-bold cursor-pointer text-white rounded-full mt-12 hover:bg-green-600 transition-all duration-200">
                Chat with {props.character.name}
            </button>
        </div>
    );
}