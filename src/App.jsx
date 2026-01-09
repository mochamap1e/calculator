import { useState } from "react";

import Button from "./components/Button";

import "./style.css";

export default function App() {
    const [equation, setEquation] = useState("");

    return <div>
        <div id="calculator">
            <h1>Texas Instruments TI-30XIIS™</h1>

            <div id="display">
                <h2>{equation}</h2>
            </div>
            <div id="buttons">
                <div id="operations"></div>
                <div id="numbers">
                    {[...Array(10).keys()].map((number) => (
                        <Button
                            key={number}
                            onClick={() => {
                                setEquation(`${equation}${number}`);
                            }}
                        >{number}</Button>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

