import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import shrek from '/shrek.jpg'
import fiona from '/fiona.jpg'
import donkey from '/donkey.jpg'
import dragon from '/dragon.jpg'
import king from '/king.jpg'
import queen from '/queen.jpg'
import puss from '/puss.jpg'
import softpaws from '/softpaws.jpg'
import breadman from '/breadman.png'
import suzySugar from '/suzySugar.png'
import doris from '/doris.jpg'
import CharacterCard from '../chat/CharacterCard'

export default function Characters()
{
    const characterPairs = [
        { name1: "Shrek", img1: shrek, name2: "Fiona", img2: fiona },
        { name1: "Donkey", img1: donkey, name2: "Dragon", img2: dragon },
        { name1: "King Harold", img1: king, name2: "Queen Lillian", img2: queen },
        { name1: "Puss in Boots", img1: puss, name2: "Kitty Softpaws", img2: softpaws },
        { name1: "Suzy Sugar", img1: suzySugar, name2: "Gingerbread", img2: breadman },
    ];

    const [selectedCharacter, setSelectedCharacter] = useState(null);

    function handleCharacterClick(name, image)
    {
        setSelectedCharacter({ name, image });

    }
    console.log(selectedCharacter);

    function handleBackClick()
    {
        setSelectedCharacter(null);
    }


    if (selectedCharacter)
    {
        return (
            <CharacterCard character={selectedCharacter} handleBackClick={() => handleBackClick()} />
        )
    }


    return (
        <>
            {/*   {selectedCharacter ? <CharacterCard />} */}

            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 p-6">
                <h1 className="text-4xl font-bold mb-8 text-yellow-300 drop-shadow-lg animate-pulse">
                    Choose Your Character 💖
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
 gap-6'>

                    {
                        characterPairs.map((character, index) => (

                            < div
                                key={index}
                                className="flex flex-row items-center justify-center gap-4 bg-pink-100 p-5 border-4 border-purple-300 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105">
                                <button
                                    onClick={() => handleCharacterClick(character.name1, character.img1)}
                                    className='bg-orange-400 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-orange-300'>
                                    <img className='w-30 h-30 rounded-2xl object-cover' src={character.img1} alt="Shek" />
                                    <h3 className='text-2xl mt-3 font-semibold text-slate-900'>{character.name1}</h3>
                                </button>
                                <p className='text-4xl'>❤️</p>
                                <button
                                    onClick={() => handleCharacterClick(character.name2, character.img2)}
                                    className='bg-orange-400 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-orange-300'>
                                    <img className='w-30 h-30 rounded-2xl object-cover' src={character.img2} alt="Shek" />
                                    <h3 className='text-2xl mt-3 font-semibold text-slate-900'>{character.name2}</h3>
                                </button>
                            </div>
                        ))
                    }

                    < div className="flex flex-row items-center justify-center gap-4 bg-pink-100 p-5 border-4 border-purple-300 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
                    >
                        <button
                            onClick={() => handleCharacterClick('Doris', doris)}
                            className='bg-orange-400 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-orange-300'>
                            <img className='w-30 h-30 rounded-2xl object-cover' src={doris} alt="Doris" />
                            <h3 className='text-2xl mt-3 font-semibold text-slate-900'>Doris</h3>
                        </button>
                        <p className='text-4xl'>💔🤮</p>
                    </div>
                </div>

                <Link to='..'>
                    <button className='bg-pink-100 text-2xl px-8 py-3 rounded-2xl mt-12 hover:bg-orange-400'>Back</button>
                </Link>
            </div >
        </>

    )
}
