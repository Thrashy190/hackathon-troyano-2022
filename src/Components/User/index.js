import React from "react";
import Nav from '../Shared/nav';
import ForumElement from '../Shared/forumElement';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function User() {
    const fE = [
        { title: 'ola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '3h', r: 23 },
        { title: 'hola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '4h30', r: 2 },
        { title: 'tengo una question', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '5h', r: 75 },
        { title: 'tengo esta pregunta', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '6h30', r: 34 },
        { title: 'aliens en la uaq?', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '7h', r: 92 },
        { title: 'profe dieGOD', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '8h', r: 223 },
    ]

    return (
        <div className="w-screen h-full flex bg-white flex-col">
            <Nav />
            <div className="w-full h-full flex justify-center items-center">
                <div className="mt-5 w-3/4 flex justify-center items-center flex-col">
                    <div className="w-1/3 grid grid-cols-[25%_75%] mb-5">
                        <div className="text-indigo-600 flex justify-center items-center flex-col">
                            <FaUserAlt size={50} />
                            <Link to="../config" className="font-medium">Editar</Link>
                        </div>
                        <div className="text-indigo-900">
                            <h1 className="font-medium text-2xl">Super Helio</h1>
                            <h2>Universidad Autónoma de Querétaro</h2>
                            <h2>Ingeniería en Software</h2>
                        </div>
                    </div>
                    <h1 className="font-medium text-2xl text-right text-indigo-900">Últimas Interacciones</h1>
                    <div className="w-full p-5 flex justify-center items-center flex-col">
                        {
                            fE.map((info, i) => {
                                return <ForumElement info={info} key={`info-${i}`}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;