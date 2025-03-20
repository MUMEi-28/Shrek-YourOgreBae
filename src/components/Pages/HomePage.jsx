import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage()
{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 via-lime-400 to-teal-500 text-white text-center p-6">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg animate-pulse"> 💚Shrek-YourOgreBae 💚</h1>
            <p className="text-lg max-w-xl mb-8">
                Love isn’t just for fairy tales! 💕 With <span className="font-bold">Shrek-YourOgreBae</span>,
                chat with your ogre companion, test your skills in <span className="italic">Hangman: Swamp Edition</span>, or unveil your swampy love fortune! 💚✨
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-20">
                <Link
                    to="/chat"
                    className="bg-white text-green-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-green-200 hover:scale-105"
                >
                    💬 Chat with Shrek
                </Link>
                <Link
                    to="/minigame"
                    className="bg-white text-teal-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-teal-200 hover:scale-105"
                >
                    🎮 Play Hangman: Swamp Edition
                </Link>
                <Link
                    to="/fortune-teller"
                    className="bg-white text-green-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-green-200 hover:scale-105"
                >
                    🔮 Reveal Your Swampy Fortune
                </Link>
            </div>

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
                    <a href="https://github.com/MUMEi-28/Shrek-YourOgreBae"
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