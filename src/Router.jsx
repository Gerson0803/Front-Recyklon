import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Pages/Inicio/Principal/Principal';
import SignUp from './Pages/Inicio/SignUp/SignUp';
import Login from './Pages/Inicio/Login/Login';
import Inicio from './Pages/Inicio/Inicio/Inicio';
import DeleteProfile from '../src/Components/SideBarComponents/Profile/DeleteProfile/DeleteProfile';

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Sign" element={<SignUp />} />
                <Route path="/DeleteUser" element={<DeleteProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rutas;
