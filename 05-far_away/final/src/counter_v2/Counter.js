import {useState} from "react";

export default function CounterV2() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);


    const date = new Date("November 16, 2023");
    date.setDate(date.getDate() + count);


    function resetHandler() {
        setCount(0);
        setStep(1);
    }

    return (
        <div className="counter">
            <div>
                <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
                <span>Step: {step}</span>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}> - </button>
                <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button onClick={() => setCount((c) => c + step)}> + </button>
            </div>
            <p>
                <span>{count === 0
                    ? "Today is "
                    : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `
                }</span>
                <span>
                    {date.toDateString()}
                </span>
            </p>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}
