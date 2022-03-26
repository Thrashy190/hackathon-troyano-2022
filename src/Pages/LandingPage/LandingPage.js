import React from "react";
import SearchButton from "../../Components/LandigPage/SearchButton";
import Morra from "../../Assets/Morra.jpg"
import RoadMap from "../../Assets/RoadMap.png"
import Foto1 from "../../Assets/Foto1.png"
import Foto2 from "../../Assets/Foto2.png"
import Logo from "../../Assets/Logo.png"
import NavLanding from "../../Components/LandigPage/NavLanding";
import CarouselCard from "../../Components/LandigPage/CarouselCard";

const LandingPage = () => {



    return (
        <div className="w-screen h-screen justify-center flex-col bg-white">
            <div className="w-full h-full flex justify-center items-strech bg-white" >
                <div className="w-2/5 h-full space-y-6 items-center flex-col bg-white">
                    <h1 className="font-bold text-[2vw] text-center text-indigo-900 mt-[40%]">Conoce tu universidad <br/>desde dentro</h1>
                    <div className="ml-[16%]">
                        <SearchButton></SearchButton>
                    </div>
                    <h3 className="font-medium text-sm text-center text-indigo-900">¿No encuentras tu universidad?</h3>
                    <h3 className="font-medium text-sm text-center underline underline-offset-4 text-indigo-900" /*onClick={}*/>
                    Crea tu propio camino aquí</h3>
                </div>
                <div className="w-3/5 h-full flex justify-start flex-col bg-indigo-600">
                    <NavLanding></NavLanding>
                    <img src={Morra} className="w-[92%] h-[41vw] justify-self-start rounded-tr-[70px] rounded-br-[70px] mt-[4%]"></img>
                </div>
            </div>

            <div className="w-full h-[800px] flex justify-center items-center flex-col bg-indigo-600">
                <div className="w-[80%] h-[100%] flex justify-center flex-col mt-[2%] rounded-lg">
                    <CarouselCard></CarouselCard>
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center flex-row space-x-[20%] bg-white border-black border-b-[1.5px]">
                <div className="w-[30%] h-[50%] flex-col mt-[2%] rounded-lg ">
                    <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">BUSCA</h1>
                    <h3 className="font-light text-[4vw] text-center text-indigo-900">Acerca de las<br/>materias que<br/>te interesan.</h3>
                </div>
                <img src={RoadMap} className="w-[30%] h-[30vw] mt-[2%]"></img>
            </div>

            <div className="w-full h-full flex justify-center items-center flex-col bg-black border-black border-b-[5px]">
                <div className="w-full h-full flex justify-center items-start flex-row space-x-[8%] bg-white">
                    <div className="w-[32%] h-[50%] flex-col mt-[2%] rounded-lg">
                        <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">INTERACTUA</h1>
                        <h3 className="font-light text-[4vw] text-center text-indigo-900">Con los recursos<br/>que seleccionamos<br/>para ti.</h3>
                    </div>
                    <img src={Foto1} className="w-[30%] h-[30vw] mt-[2%]"></img>
                </div>
                <div className="w-full h-full justify-center flex-col space-y-[-4%] bg-black">
                    <div className="w-full h-full flex justify-center items-start flex-row space-x-[7%] bg-white">
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-indigo-600 border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Periodos</h3>
                        </div>
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-[#969696] border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Temarios</h3>
                        </div>
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-[#969696] border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Documentos</h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-start flex-row space-x-[7%] bg-white">
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-[#969696] border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Videos</h3>
                        </div>
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-[#969696] border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Charlas</h3>
                        </div>
                        <div className="w-[15vw] h-[4.5vw] flex justify-center items-center shadow-2xl border-[#969696] border-[2px] rounded-lg">
                            <h3 className="font-light text-[2vw] text-center text-indigo-900">Dudas</h3>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-start flex-row space-x-[1%] bg-white">
                        <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">TODO</h1>
                        <h1 className="font-bold text-[3.5vw] text-center text-indigo-900">EN UN MISMO LUGAR.</h1>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center flex-col space-y-[20%] mt-[20%]">
                <div className="w-full h-[25%] flex justify-center items-center flex-row space-x-[10%] border-black border-t-[1.5px]">
                    <div className="w-[35%] h-[140%] flex-col mt-[10%] rounded-lg ">
                        <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">ALZA LA MANO</h1>
                        <h3 className="font-light text-[4vw] text-center text-indigo-900">Y has tus dudas a la<br/>comunidad.</h3>
                    </div>
                    <img src={Foto2} className="w-[38%] h-[30vw] mt-[19%] "></img>                    
                </div>
                <div className="w-full h-full flex justify-center items-start flex-row space-x-[7%] ">
                    <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
                        <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%]">UAQ FAULTDAD<br/>DE INFORMÁTICA</h3>
                        <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">Ingeniería en<br/>Software</h1>
                        <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-[25%]">20 personas activas.</h2>
                    </div>
                    <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
                        <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%]">UAQ FAULTDAD<br/>DE INFORMÁTICA</h3>
                        <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">Ingeniería en<br/>Software</h1>
                        <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-[25%]">20 personas activas.</h2>
                    </div>
                    <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
                        <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%]">UAQ FAULTDAD<br/>DE INFORMÁTICA</h3>
                        <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">Ingeniería en<br/>Software</h1>
                        <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-[25%]">20 personas activas.</h2>
                    </div>
                </div>
            </div>

            <div className="w-full h-[68%] flex justify-center items-center flex-col space-y-[5%] bg-indigo-600 mt-[12%]">
                <img src={Logo} className="w-[5%] h-[22%]"></img>
                <h3 className="font-light text-[2vw] text-center text-indigo-900">Todos los derechos reservados 2022 / Avgi </h3>
            </div>
        </div>        
    )
}

export default LandingPage;