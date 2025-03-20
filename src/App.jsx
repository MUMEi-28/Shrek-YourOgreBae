import './App.css'
import Chat from './components/Pages/Chat'
import HomePage from './components/Pages/HomePage'
import Minigame from './components/Pages/Minigame'
import FortuneTeller from './components/Pages/FortuneTeller'

import { Routes, Route } from 'react-router-dom';
import Characters from './components/Pages/Characters'


function App()
{
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} ></Route>
                <Route path='/chat' element={<Chat />} ></Route>
                <Route path='/choose' element={<Characters />}></Route>
                <Route path='/minigame' element={<Minigame />} ></Route>
                <Route path='/fortune-teller' element={<FortuneTeller />} ></Route>
            </Routes>
        </>
    )

}

export default App