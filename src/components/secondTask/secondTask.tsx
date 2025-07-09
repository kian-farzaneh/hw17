import React, { useReducer } from "react";

interface State {
    count: number;
    step: number;
};

type Action = | { type: "increase" } | { type: "decrease" } | { type: "reset" } | { type: "setStep"; step: number }

const initialState: State = {
    count: 0,
    step: 1
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + state.step };
        case 'decrease':
            return { ...state, count: state.count - state.step };
        case 'reset':
            return { ...state, count: 0 };
        case 'setStep':
            return { ...state, step: action.step };
        default :
            return state;
    };
};



function SecondTask() {

    const [num, dispatch] = useReducer(reducer, initialState);

    function handleIncrease() {
        dispatch({type: 'increase'});
    };

    function handleDecrease() {
        dispatch({type: 'decrease'});
    };

    function handleReset() {
        dispatch({type: 'reset'});
    };

    function handleSetStep(e:React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: 'setStep' , step: +(e.target.value)})
    }

    return <>
        <h1 className="w-full mt-3 font-bold text-[25px] flex justify-center items-center">Second Task</h1>
        <div>
            <h1>Counter: {num.count}</h1>
            <button className="bg-green-400 m-2 p-2 rounded-md" onClick={handleIncrease}>Increase</button>
            <button className="bg-red-700 m-2 p-2 rounded-md" onClick={handleDecrease}>Decrease</button>
            <button className="bg-yellow-400 m-2 p-2 rounded-md" onClick={handleReset}>Reset</button>
            <br />
            <label>Step:
                <input type="number" min={0} value={num.step} onChange={handleSetStep} />
            </label>
        </div>
    </>;
};

export default SecondTask;