import { useState } from 'react'

import messages from "../../data/minigame/Messages.js"
import { getFarewellText, getRandomWord } from "../../data/minigame/gameMessages.js"
import encouragementData from "../../data/minigame/encouragementData.js"
import winMessageData from "../../data/minigame/winMessageData.js"
import Confetti from "react-confetti"
import { Link } from 'react-router-dom'

export default function Minigame()
{
    // State Values
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetter, setGuessedLetter] = useState([])
    const [encouragementMessage, setEncouragementMessage] = useState(() =>
    {
        const randomIndex = Math.floor(Math.random() * encouragementData.length)
        return encouragementData[randomIndex]
    })
    const [winMessage, setWinMessage] = useState(() =>
    {
        const randomIndex = Math.floor(Math.random() * winMessageData.length)
        return winMessageData[randomIndex]
    })

    // Derived values
    const wrongGuessCount = guessedLetter.filter(letter => !currentWord.includes(letter)).length

    const isGameLost = wrongGuessCount >= 9
    const isGameWon = currentWord.split("").every(letter => guessedLetter.includes(letter))

    const lastGuessLetter = guessedLetter[guessedLetter.length - 1]
    const islastGuessIncorrect = lastGuessLetter && !currentWord.includes(lastGuessLetter)

    const isGameOver = isGameLost || isGameWon

    // Static Values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function updateEncouragement(letter)
    {
        if (currentWord.includes(letter))
        {
            const randomIndex = Math.floor(Math.random() * encouragementData.length)
            setEncouragementMessage(encouragementData[randomIndex])
        } else
        {
            setEncouragementMessage(getFarewellText(letter))
        }
    }

    function onGuessLetter(letter)
    {
        if (!guessedLetter.includes(letter))
        {
            setGuessedLetter(prevLetter => [...prevLetter, letter])
            updateEncouragement(letter)
        }
    }

    function startNewGame()
    {
        setCurrentWord(getRandomWord())
        setGuessedLetter([])
        const randomEncouragementIndex = Math.floor(Math.random() * encouragementData.length)
        setEncouragementMessage(encouragementData[randomEncouragementIndex])
        const randomWinMessageIndex = Math.floor(Math.random() * winMessageData.length)
        setWinMessage(winMessageData[randomWinMessageIndex])
    }

    return (
        <>
            {isGameWon && <Confetti />}

            <div className='bg-[#FFEEF2] min-h-screen flex flex-col items-center justify-center p-4'>
                <div className="w-full max-w-lg bg-[#FFC0CB] rounded-md text-center p-4 shadow-lg border border-[#FF69B4]">

                    <header className='p-3'>
                        <h1 className='text-2xl font-mono text-[#B22222] my-3'>Hangman: Love Edition</h1>
                        <p className='text-[#8B0000]'>Guess the word in under 9 attempts to keep Aphrodite happy!</p>
                    </header>
                    {!isGameOver && wrongGuessCount === 0 ? (
                        <section className="bg-[#FFB6C1] p-2 mt-4 mb-9 rounded-md">
                            <p className="text-lg text-[#8B0000]">{encouragementMessage}</p>
                        </section>
                    ) : isGameWon && isGameOver ? (
                        <section className="bg-[#FF69B4] p-2 mt-4 mb-9 rounded-md">
                            <h1 className="text-lg text-white">{winMessage}</h1>
                        </section>
                    ) : isGameLost && isGameOver ? (
                        <section className="bg-[#DC143C] p-2 mt-4 mb-9 rounded-md">
                            <h1 className="text-lg text-white">Aphrodite is disappointed... The word was "{currentWord}" 💔</h1>
                        </section>
                    ) : !isGameOver && islastGuessIncorrect ? (
                        <section className="bg-[#DDA0DD] p-2 mt-4 mb-9 rounded-md">
                            <p className="text-lg text-[#8B0000]">
                                {getFarewellText(messages[wrongGuessCount - 1].name)}
                            </p>
                        </section>
                    ) : (
                        <section className="bg-[#FFB6C1] p-2 mt-4 mb-9 rounded-md">
                            <p className="text-lg text-[#8B0000]">{encouragementMessage}</p>
                        </section>
                    )}

                    <section className='flex flex-wrap gap-1 justify-center'>
                        {messages.map((language, index) =>
                        {
                            const isLanguageLost = index < wrongGuessCount

                            return (<span style={{
                                backgroundColor: language.backgroundColor,
                                color: isLanguageLost ? "#fff" : language.color
                            }}
                                className={`p-1 rounded-sm gap relative ${isLanguageLost ? "lost" : ""} `}
                                key={language.name}
                            >{language.name}</span >)
                        })}
                    </section>

                    <section className='my-9 flex flex-wrap justify-center'>
                        {
                            currentWord.split("").map((letter, index) =>
                            {
                                return (
                                    <span key={index}
                                        className='text-xl uppercase bg-[#FF69B4] text-white px-4 py-2 border-b-2 m-[0.1rem] size-[3rem] rounded-md'
                                    >{guessedLetter.includes(letter) ? letter.split("") : ""}</span>
                                )
                            })
                        }
                    </section>
                    <section className='flex flex-wrap items-center justify-center'>
                        {alphabet.split("").map((letter, index) =>
                        {
                            const isGuessed = guessedLetter.includes(letter)
                            const isCorrect = isGuessed && currentWord.includes(letter)
                            const isWrong = isGuessed && !currentWord.includes(letter)

                            const colorStyle = isCorrect ? "bg-green-500" : isWrong ? "bg-red-500" : "bg-pink-400"
                            return (
                                <button
                                    key={index}
                                    className={`py-2 px-4 ${colorStyle} text-white uppercase m-1 rounded-md border-[#e7e6e6] border-[1px] font-semibold cursor-pointer`}
                                    onClick={() => onGuessLetter(letter)}
                                    disabled={isGameOver}
                                > {letter}</button>)
                        })}
                    </section >

                    {isGameOver &&
                        <div className='flex flex-row justify-center gap-4 mt-4'>
                            <button className='bg-[#FF69B4] text-white py-3 px-6 rounded-md border border-white'
                                onClick={() => startNewGame()}
                            >Play Again</button>
                        </div>
                    }
                    <Link to='..'>
                        <button className='cursor-pointer bg-[#FF69B4] text-white py-3 px-6 rounded-md border border-white mt-4'>Back</button>
                    </Link >
                </div>
            </div>
        </>
    )
}