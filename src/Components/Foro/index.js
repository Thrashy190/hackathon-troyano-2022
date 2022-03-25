import React from "react";
import Nav from '../Shared/nav';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

function Select(props) {
    return (
        <select
            className="h-12 w-[80%] my-6 border-2 border-indigo-600 rounded-md"
        >
            <option disabled selected>{props.def}</option>
            {props.options.map((option, i) => {
                return <option key={`option-${i}`}>{option}</option>
            })}
        </select>
    )
}

function Search(props) {
    return (
        <div className="h-9 w-full flex justify-start">
            <div className="h-8 w-8 flex justify-center items-center mr-4">
                <FaSearch size={25} />
            </div>
            <input
                className="h-8 w-2/3 border-2 border-indigo-600 rounded-md inline-block pl-2"
                placeholder="Buscar"
            />
        </div>
    )
}

function ForumElement(props) {
    return (
        <div className="h-40 w-full my-5 border-2 border-gray-400 rounded-xl p-5">
            <h1 className="text-3xl text-indigo-900 mb-2">{props.info.title}</h1>
            <div className="grid grid-cols-[66%_33%] grid-rows-1 text-indigo-900 font-bold">
                <div>
                    <h2>Universidad: {props.info.u}</h2>
                    <h2>Carrera: {props.info.c}</h2>
                    <h2>Asignatura: {props.info.a}</h2>
                </div>
                <div>
                    <h2>Última interacción: {props.info.lI}</h2>
                    <h2>Respuestas: {props.info.r}</h2>
                </div>
            </div>
        </div>
    )
}

function Foro(props) {
    const selects = [
        { def: 'Universidad', options: ["UAQ", "UNAM", "ETC"] },
        { def: 'Carrera', options: ["Informática", "Mecatróncica", "Sistemas"] },
        { def: 'Materia', options: ["Mate", "Ciencias", "Progra"] },
    ]

    const fE = [
        {title: 'ola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '3h', r: 23},
        {title: 'hola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '4h30', r: 2},
        {title: 'tengo una question', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '5h', r: 75},
        {title: 'tengo esta pregunta', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '6h30', r: 34},
        {title: 'aliens en la uaq?', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '7h', r: 92},
        {title: 'profe dieGOD', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '8h', r: 223},
    ]

    return (
        <div className="w-screen h-full flex bg-white flex-col">
            <Nav/>
            <div className="mx-10 my-5 grid grid-cols-[66%_33%] grid-rows-1 h-full">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-indigo-900 mb-10">¿Sobre que te gustaría hablar hoy?</h1>
                    <div className="w-full">
                        <Search />
                        <div className="p-5 flex justify-center items-center flex-col">
                            {
                                fE.map(info => {
                                    return <ForumElement info={info}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-400 rounded-xl flex justify-center items-center flex-col h-[30rem]">
                    <h1 className="text-4xl font-bold text-indigo-900">Filtros</h1>
                    {selects.map((select, i) => {
                        return <Select def={select.def} options={select.options} key={`select-${i}`} />
                    })}
                    <Button variant="contained">Buscar</Button>
                </div>
            </div>
        </div>
    )
}

export default Foro;