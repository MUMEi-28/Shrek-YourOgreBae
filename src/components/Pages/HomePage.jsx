import React from 'react';
import { Link } from 'react-router-dom';
import shrekVideo from '/shrek-scene.mp4'; // Make sure this file is inside your `public` or `src/assets` folder

export default function HomePage()
{
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-6">

            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={shrekVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to improve text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-6 drop-shadow-lg animate-pulse">
                    💚 Shrek: Your Ogre Bae 💚
                </h1>
                <p className="text-lg max-w-xl mb-8 ">
                    Love isn’t just for fairy tales! 💕 With <span className="font-bold">Shrek: Your Ogre Bae</span>,
                    chat with your ogre companion, test your skills in <span className="italic">Hangman: Swamp Edition</span>,
                    or unveil your swampy love fortune! 💚✨
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mb-20">

                    <Link
                        to="/minigame"
                        className="bg-white text-teal-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-teal-200 hover:scale-105"
                    >
                        🎮 Play Hangman: Swamp Edition
                    </Link>
                    <Link
                        to="/choose"
                        className="bg-white text-green-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-green-200 hover:scale-105"
                    >
                        💬 Pick & Chat
                    </Link>
                    <Link
                        to="/fortune-teller"
                        className="bg-white text-green-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:bg-green-200 hover:scale-105"
                    >
                        🔮 Reveal Your Swampy Fortune
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className='absolute bottom-0 w-full text-white text-center p-4 shadow-md'>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MJ. Open-source under the{' '}
                    <a
                        href="https://opensource.org/licenses/MIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300 transition"
                    >
                        MIT License
                    </a>.
                </p>
                <p className="mt-1 text-xs">
                    <a
                        href="https://github.com/MUMEi-28/Shrek-YourOgreBae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300 transition"
                    >
                        View on GitHub
                    </a>
                </p >
            </footer >

        </div >
    );
}