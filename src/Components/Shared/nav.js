import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Li(props) {
    const underline = props.on ? 'underline' : '';
    const content = props.button ? <Button variant="contained">{props.label}</Button> : props.label;
    return (
        <li className={`text-white list-none inline-block mx-12 text ${underline}`}><Link to={props.to}>{content}</Link></li>
    )
}

function Nav(props) {
    return (
        <nav className="w-full h-20 bg-indigo-600 flex justify-around items-center">
            <div className="text-white mr-3">
                <FaMapMarkerAlt size={40} />
            </div>
            <ul className="w-1/2">
                {props.lis.map(li => {
                    return <Li label={li.title} on={li.on} button={li.button} to={li.to} />
                })}
            </ul>
        </nav>
    )
}

export default Nav;