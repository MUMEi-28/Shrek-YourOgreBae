import React from 'react'

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

export default function Characters()
{
    const characterPairs = [
        { name1: "Shrek", img1: shrek, name2: "Fiona", img2: fiona },
        { name1: "Donkey", img1: donkey, name2: "Dragon", img2: dragon },
        { name1: "King Harold", img1: king, name2: "Queen Lillian", img2: queen },
        { name1: "Puss in Boots", img1: puss, name2: "Kitty Softpaws", img2: softpaws },
        { name1: "Suzy Sugar", img1: suzySugar, name2: "Gingerbread", img2: breadman },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-800 to-green-600 p-6">
            <h1 className="text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">Choose Your Character</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
 gap-6'>

                {
                    characterPairs.map((character, index) => (
                        < div className="flex flex-row items-center justify-center gap-3 bg-yellow-500 p-5 border-4 border-yellow-700 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
                        >
                            <button className='bg-amber-300 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-yellow-300'>
                                <img className='w-30 h-30 rounded-2xl object-cover' src={character.img1} alt="Shek" />
                                <h3 className='text-2xl mt-3 font-semibold text-slate-900'>{character.name1}</h3>
                            </button>
                            <p className='text-4xl'>❤️</p>
                            <button className='bg-amber-300 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-yellow-300'>
                                <img className='w-30 h-30 rounded-2xl object-cover' src={character.img2} alt="Shek" />
                                <h3 className='text-2xl mt-3 font-semibold text-slate-900'>{character.name2}</h3>
                            </button>
                        </div>
                    ))

                }

                < div className="flex flex-row items-center justify-center gap-3 bg-yellow-500 p-5 border-4 border-yellow-700 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
                >
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg flex flex-col items-center justify-center h-56 hover:bg-yellow-300'>
                        <img className='w-30 h-30 rounded-2xl object-cover' src={doris} alt="Doris" />
                        <h3 className='text-2xl mt-3 font-semibold text-slate-900'>Doris</h3>
                    </button>
                    <p className='text-4xl'>💔🤮</p>

                </div>

                {/* 
                <div className=' flex flex-row items-center justify-center gap-3 bg-amber-600 p-5 border-2 rounded-2xl shadow-xl'>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={donkey} alt="Shek" />
                        <h3 className='text-2xl my-3'>Shrek</h3>
                    </button>
                    <p className='text-4xl'>❤️</p>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={dragon} alt="Shek" />
                        <h3 className='text-2xl my-3'>Fiona</h3>
                    </button>
                </div>

                <div className=' flex flex-row items-center justify-center gap-3 bg-amber-600 p-5 border-2 rounded-2xl shadow-xl'>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={king} alt="Shek" />
                        <h3 className='text-2xl my-3'>Shrek</h3>
                    </button>
                    <p className='text-4xl'>❤️</p>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={queen} alt="Shek" />
                        <h3 className='text-2xl my-3'>Fiona</h3>
                    </button>
                </div>

                <div className=' flex flex-row items-center justify-center gap-3 bg-amber-600 p-5 border-2 rounded-2xl shadow-xl'>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={puss} alt="Shek" />
                        <h3 className='text-2xl my-3'>Shrek</h3>
                    </button>
                    <p className='text-4xl'>❤️</p>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={softpaws} alt="Shek" />
                        <h3 className='text-2xl my-3'>Fiona</h3>
                    </button>
                </div>

                <div className=' flex flex-row items-center justify-center gap-3 bg-amber-600 p-5 border-2 rounded-2xl shadow-xl'>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={doris} alt="Shek" />
                        <h3 className='text-2xl my-3'>Shrek</h3>
                    </button>

                </div>

                <div className=' flex flex-row items-center justify-center gap-3 bg-amber-600 p-5 border-2 rounded-2xl shadow-xl'>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={suzySugar} alt="Shek" />
                        <h3 className='text-2xl my-3'>Shrek</h3>
                    </button>
                    <p className='text-4xl'>❤️</p>
                    <button className='bg-amber-300 rounded-3xl p-3 shadow-lg'>
                        <img className='w-30 h-30 rounded-2xl' src={breadman} alt="Shek" />
                        <h3 className='text-2xl my-3'>Fiona</h3>
                    </button>
                </div> */}
            </div>
        </div >
    )
}
