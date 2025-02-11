import React from "react";
import FirstTask from "../firstTask/firstTask";
import SecondTask from "../secondTask/secondTask";

function HomeComponents() {
    return <>
        <div>
            <FirstTask />
        </div>
        <div className="w-full border border-black"></div>
        <div className="flex flex-col justify-center items-center">
            <SecondTask />
        </div>
    </>;
};

export default HomeComponents;