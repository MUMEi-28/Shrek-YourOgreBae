import React, { useState } from 'react';
import fortuneMessages from '../../data/fortuneTeller/fortuneMessages';
import { Link } from 'react-router-dom';

export default function ShrekFortuneTeller()
{
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [fortune, setFortune] = useState('');
    const [isPredicting, setIsPredicting] = useState(false);

    const characters = ["Shrek", "Donkey", "Fiona", "Puss in Boots", "Kitty Softpaws", "Pinocchio", "King Harold"];

    const handleSelectCharacter = (character) =>
    {
        setSelectedCharacter(character);
        //   setFortune(''); // Reset fortune when selecting a new character
    };

    const handlePredictFortune = () =>
    {
        if (!selectedCharacter)
        {
            setFortune("Please choose a Shrek character first!");
            return;
        }

        setIsPredicting(true);

        setTimeout(() =>
        {
            const messages = fortuneMessages[selectedCharacter];

            if (messages && messages.length > 0)
            {
                const randomFortune = messages[Math.floor(Math.random() * messages.length)];
                setFortune(randomFortune);
            } else
            {
                setFortune("No fortunes available for this character yet.");
            }

            setIsPredicting(false);
        }, 1000); // Simulate delay for better experience
    };

    return (
        <div className='bg-[#4b8e4b] min-h-screen flex flex-col items-center justify-center relative'>
            <div className="p-8 max-w-lg mx-auto text-center bg-green-200 shadow-xl rounded-lg border border-green-400 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 flex justify-center -mt-8">
                    <span className="text-4xl">🧅✨🧅</span>
                </div>

                <h1 className="text-4xl font-bold text-green-800">Shrek Fortune Teller</h1>
                <p className="text-green-700 mt-2">Choose a character to reveal your fate in the Swamp of Love 💚</p>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {characters.map((character) => (
                        <button
                            key={character}
                            onClick={() => handleSelectCharacter(character)}
                            className={`px-5 py-2 rounded-full font-semibold transition duration-300 border shadow-md text-green-900 bg-green-300 hover:bg-green-400 hover:text-white ${selectedCharacter === character ? 'bg-green-600 text-white' : ''}`}
                        >
                            {character}
                        </button>
                    ))}
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                    <button
                        onClick={handlePredictFortune}
                        className={`mt-6 px-8 py-3 font-bold rounded-full transition duration-300 shadow-lg ${isPredicting ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`}
                        disabled={isPredicting}
                    >
                        {isPredicting ? 'Predicting...' : '🧅 Reveal My Swamp Fate 🧅'}
                    </button>

                    <button className="px-8 py-3 font-bold rounded-full transition duration-300 shadow-lg bg-blue-500 hover:bg-blue-600 text-white">
                        <Link to='..'>Go Back</Link>
                    </button>
                </div>
            </div>

            {fortune && (
                <p className="mt-6 text-xl font-semibold text-green-900 italic transition-opacity duration-500 bg-white p-4 rounded-lg shadow-md border border-green-400 max-w-2xl text-center">
                    "{fortune}"
                </p>
            )}
        </div>
    );
}
