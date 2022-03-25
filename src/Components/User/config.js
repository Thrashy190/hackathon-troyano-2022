import React from "react";
import Nav from '../Shared/nav';
import ForumElement from '../Shared/forumElement';
import { FaUserAlt, FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Input(props) {
    return (
        <div className="mb-4">
            <h2 className="mb-2">{props.title}</h2>
            <input className="h-8 w-48 border-2 border-gray-400 rounded-md" />
        </div>
    )
}

function Li(props) {
    return (
        <li className="h-12 font-medium">{props.children}</li>
    )
}

function User() {
    const inputs = ['Cosa','Cosa','Cosa','Cosa','Cosa',]
    return (
        <div className="w-screen h-full flex bg-white flex-col">
            <Nav />
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-3/4 h-full flex justify-center items-center flex-col">
                    <div className="w-full grid grid-cols-[30%_70%] grid-rows-[1fr_24rem]">
                        <div className="flex items-center justify-center h-24 border-b-2 border-gray-400 mr-4">
                            <div className="text-indigo-600 flex justify-center items-center">
                                <Link to="../perfil"><FaChevronLeft size={25} className="mr-4" /></ Link>
                                <FaUserAlt size={40} className="mr-4" />
                                <h1 className="text-indigo-900 text-2xl font-medium">Super Helio</h1>
                            </div>
                        </div>
                        <div className="h-24 border-b-2 border-gray-400 flex justify-start items-center">
                            <h1 className="text-indigo-900 font-medium text-2xl">General</h1>
                        </div>
                        <div className="flex justify-center mt-5">
                            <ul className="text-indigo-900">
                                <Li>General</Li>
                                <Li>Cuenta</Li>
                                <Li>Seguridad</Li>
                                <Li>Apariencia</Li>
                                <Li>Notificaciones</Li>
                                <Li>Publicaciones</Li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            {inputs.map((input, i) => {
                                return <Input title={input} key={`input-${i}`}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;