import React from "react";
import SearchButton from "../../Components/LandigPage/SearchButton";
import Morra from "../../Assets/Morra.jpg"

const LandingPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center flex-col bg-white">
            <div className="w-screen h-screen flex justify-center items-stretch bg-white">
                <div className="w-2/5 h-screen space-y-6 justify-center flex-col bg-white">
                    <h1 className="font-bold text-2xl text-indigo-900 mt-[200px]">Conoce tu universidad <br/>desde dentro</h1>
                    <div className="ml-[80px]">
                        <SearchButton></SearchButton>
                    </div>
                    <h3 className="font-medium text-sm text-indigo-900">¿No encuentras tu universidad?</h3>
                    <h3 className="font-medium text-sm underline underline-offset-4 text-indigo-900" /*onClick={}*/>
                    Crea tu propio camino aquí</h3>
                </div>
                <div className="w-3/5 h-screen flex justify-start items-center bg-indigo-600">
                    <img src={Morra} className="w-4/5 flex-none rounded-tr-[70px] rounded-br-[70px]"></img>
                </div>
            </div>
            <div className="w-screen h-screen flex justify-center flex-col bg-indigo-600">

            </div>
        </div>        
    )
}

export default LandingPage;