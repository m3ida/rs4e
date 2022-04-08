import './css/App.css';
import Panel from './components/Panel';
import NotFoundPage from './components/NotFoundPage';
import Admin from './components/Admin';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'animate.css';

function App() {
    return (
        <>
            <BrowserRouter basename={'rs4e'}>
                <Routes>
                    <Route path='QuestRS4E' element={<Panel questionsFileName={'Quest_RS4E.js'} />} />
                    <Route path='QuestUMA' element={<Panel questionsFileName={'Quest_UMa.js'} />} />
                    <Route path='QuestRS4EEmp' element={<Panel questionsFileName={'Quest_RS4E_Emp.js'} />} />
                    <Route path='QuestUMAEmp' element={<Panel questionsFileName={'Quest_UMa_Emp.js'} />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
