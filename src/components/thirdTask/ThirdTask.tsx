import React, { useMemo } from "react";


export const ThirdTask = () => {

    const numbers = [12, 2, 31, 44, 56, 68, 0, 13, 15, 16];

    const evenSum = useMemo(() => {
        return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 100);
    }, [numbers]); 

    return <>
        <h1 className="w-full mt-3 font-bold text-[25px] flex justify-center items-center">Third Task</h1>
        <div>
            <ul>
                {numbers.map((num) => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
            <h3>evenSum {evenSum}</h3>
        </div>
    </>

}