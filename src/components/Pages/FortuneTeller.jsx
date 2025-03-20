import React, { useState } from 'react';
import fortuneMessages from '../../data/fortuneTeller/fortuneMessages';
import { Link } from 'react-router-dom';

export default function FortuneTeller()
{
    const [selectedGod, setSelectedGod] = useState(null);
    const [fortune, setFortune] = useState('');
    const [isPredicting, setIsPredicting] = useState(false);

    const gods = ["Zeus", "Hermes", "Ares", "Aphrodite", "Apollo", "Poseidon"];

    const handleSelectGod = (god) =>
    {
        setSelectedGod(god);
        setFortune(''); // Reset fortune when selecting a new god
    };

    const handlePredictFortune = () =>
    {
        if (!selectedGod)
        {
            setFortune("Please choose a Greek god first!");
            return;
        }

        setIsPredicting(true);

        setTimeout(() =>
        {
            const messages = fortuneMessages[selectedGod];

            if (messages && messages.length > 0)
            {
                const randomFortune = messages[Math.floor(Math.random() * messages.length)];
                setFortune(randomFortune);
            } else
            {
                setFortune("No fortunes available for this god yet.");
            }

            setIsPredicting(false);
        }, 1000); // Simulate delay for better experience
    };

    return (

        <div className='bg-[#74617a] min-h-screen flex flex-col items-center justify-center relative'>
            <div className="p-8 max-w-lg mx-auto text-center bg-pink-100 shadow-xl rounded-lg border border-pink-300 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 flex justify-center -mt-8">
                    <span className="text-4xl">💖🔮💖</span>
                </div>



                <h1 className="text-4xl font-bold text-pink-700">Love Fortune Teller</h1>
                <p className="text-pink-600 mt-2">Choose a Greek God to reveal your romantic fate 💕</p>

                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {gods.map((god) => (
                        <button
                            key={god}
                            onClick={() => handleSelectGod(god)}
                            className={`px-5 py-2 rounded-full font-semibold transition duration-300 border shadow-md text-pink-900 bg-pink-200 hover:bg-pink-300 hover:text-white ${selectedGod === god ? 'bg-pink-500 text-white' : ''
                                }`}
                        >
                            {god}
                        </button>
                    ))}
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <button
                        onClick={handlePredictFortune}
                        className={`mt-6 px-8 py-3 font-bold rounded-full transition duration-300 shadow-lg ${isPredicting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
                            } text-white`}
                        disabled={isPredicting}
                    >
                        {isPredicting ? 'Predicting...' : '💘 Reveal My Fortune 💘'}
                    </button>

                    <button className=" px-8 py-3 font-bold rounded-full transition duration-300 shadow-lg bg-blue-500 hover:bg-blue-600 text-white"><Link to='..'>Go Back</Link>
                    </button>


                </div>


            </div>
            {
                fortune && (
                    <p className=" mt-6 text-xl font-semibold text-pink-800 italic transition-opacity duration-500 bg-white p-4 rounded-lg shadow-md border border-pink-300">
                        "{fortune}"
                    </p>
                )
            }
        </div >

    );
}
