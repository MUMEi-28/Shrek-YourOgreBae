import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage()
{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-red-400 to-purple-500 text-white text-center p-6">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg animate-pulse">💻❤️ Aphrodite AI ❤️💻</h1>
            <p className="text-lg max-w-xl mb-8">
                Love doesn't only happen in February! 💕 With <span className="font-bold">Aphrodite AI</span>,
                chat with an AI companion, test your luck in <span className="italic">Hangman: Love Edition</span>, or unveil your love fortune! 💘✨
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-20">
                <Link
                    to="/chat"
                    className="bg-white text-pink-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-pink-200 hover:scale-105"
                >
                    💬 Chat with Aphrodite
                </Link>
                <Link
                    to="/minigame"
                    className="bg-white text-purple-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-purple-200 hover:scale-105"
                >
                    🎮 Play Hangman: Love Edition
                </Link>
                <Link
                    to="/fortune-teller"
                    className="bg-white text-pink-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-pink-200 hover:scale-105"
                >
                    🔮 Reveal Your Love Fortune
                </Link>
            </div>

            {/* <div className="mt-12 bg-white text-red-600 p-4 rounded-lg shadow-md max-w-md">
                <h2 className="text-2xl font-semibold">💖 Competition Details 💖</h2>
                <a
                    href="https://forms.gle/LN6TJ8yHrdM893pu8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-blue-600 font-bold underline hover:text-blue-800 transition"
                >
                    📌 View Competition Details Here!
                </a>
            </div> */}

            <footer className='absolute bottom-0 w-full text-white text-center p-4 shadow-md'>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MJ. Open-source under the <a
                        href="https://opensource.org/licenses/MIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300 transition">
                        MIT License
                    </a>.
                </p>
                <p className="mt-1 text-xs">
                    <a href="https://github.com/MUMEi-28/Aphrodite-AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300 transition">
                        View on GitHub
                    </a>
                </p>
            </footer>

        </div>
    );
}
