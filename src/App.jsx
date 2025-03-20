import './App.css'
import AphroditeChat from './components/Pages/AphroditeChat'
import HomePage from './components/Pages/HomePage'
import Minigame from './components/Pages/Minigame'
import FortuneTeller from './components/Pages/FortuneTeller'

import { Routes, Route } from 'react-router-dom';


function App()
{
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/chat' element={<AphroditeChat />} ></Route>
                <Route path='/minigame' element={<Minigame />} ></Route>
                <Route path='/fortune-teller' element={<FortuneTeller />} ></Route>
            </Routes>
        </>
    )

}

export default App