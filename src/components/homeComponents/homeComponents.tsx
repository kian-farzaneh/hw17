import React from "react";
import FirstTask from "../firstTask/firstTask";
import SecondTask from "../secondTask/secondTask";
import { ThirdTask } from "../thirdTask/ThirdTask";

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
    </>;
};

export default HomeComponents;