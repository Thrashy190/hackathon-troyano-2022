import React from "react";
import Nav from '../Shared/nav';
import Button from '@mui/material/Button';

function Select(props) {
    return (
        <select className="h-9 w-96 my-6 border-2 border-indigo-600 rounded-md"></select>
    )
}

function Foro(props) {
    const lis = [
        {title: "Foros", on: true, button: false, to: '/foros'},
        {title: "Universidades", on: false, button: false, to: '/universidades'},
        {title: "Registro", on: false, button: true, to: '/signin'},
        {title: "Inicio de Sesión", on: false, button: false, to: '/login'},
    ]

    return (
        <div className="w-screen h-screen flex bg-white flex-col">
            <Nav lis={lis}></Nav>
            <div className="mx-10 my-5 grid grid-cols-[66%_33%] grid-rows-1 h-full">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-indigo-900">¿Sobre que te gustaría hablar hoy?</h1>
                </div>
                <div className="border-2 border-gray-400 rounded-xl flex justify-center items-center flex-col h-full">
                    <h1 className="text-4xl font-bold text-indigo-900">Filtros</h1>
                    <Select></Select>
                    <Select></Select>
                    <Select></Select>
                    <Button variant="contained">Buscar</Button>
                </div>
            </div>
        </div>
    )
}

export default Foro;