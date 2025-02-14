import React from "react";
import FirstTask from "../firstTask/firstTask";
import SecondTask from "../secondTask/secondTask";
import { ThirdTask } from "../thirdTask/ThirdTask";
import { ForthTask } from "../forthTask/ForthTask";
import FifthTask from "../fifthTask/FifthTask";
import SixthTask from "../sixethTask/SixthTask";

function HomeComponents() {
    return <>
        <div className="p-6 pb-10 flex flex-col justify-center items-center">
            <FirstTask />
        </div>

        <div className="w-full border border-black"></div>

        <div className="p-6 pb-10 flex flex-col justify-center items-center">
            <SecondTask />
        </div>

        <div className="w-full border border-black"></div>

        <div className="p-8 flex flex-col justify-center items-center">
            <ThirdTask />
        </div>

        <div className="w-full border border-black"></div>

        <div className="p-8 flex flex-col justify-center items-center">
            <h1 className="m-2 w-full mt-3 font-bold text-[25px] flex justify-center items-center">Forth Task</h1>
            <ForthTask name="shanbeh" lastName="kabolizadeh" phoneNumber={987765543} />
            <ForthTask name="jomeh" lastName="tatilianpoor" phoneNumber={235235253} />
        </div>

        <div className="w-full border border-black"></div>

        <div className="p-8 flex flex-col justify-center items-center">
            <FifthTask />
        </div>

        <div className="w-full border border-black"></div>

        <div className="p-8 flex flex-col justify-center items-center">
            <SixthTask />
        </div>
    </>;
};

export default HomeComponents;