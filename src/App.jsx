import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
