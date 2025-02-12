import React, { useMemo } from "react";


export const ThirdTask = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evenSum = useMemo(() => {
        return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
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