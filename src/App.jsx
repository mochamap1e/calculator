import { useState } from "react";

import Button from "./components/Button";

import "./style.css";

export default function App() {
    const [equation, setEquation] = useState("");
    const [result, setResult] = useState("");

    const operators = ["+", "-","*", "/", "^", "%", "√", "(", ")"]

    function addToEquation(str) {
        setEquation(`${equation}${str}`);
    }

    function parse() {
        let tempString = "";
        let operation = [];
        
        for (let i = 0; i < equation.length; i++) {
            const character = equation[i];
            const isOperator = operators.includes(character);

            if (isOperator) {
                operation.push(tempString);
                operation.push(character);
                tempString = "";
            } else {
                tempString = `${tempString}${character}`;
            }
        }
        
        operation.push(tempString);
    }

    function calculate() {
        const hasParenthesis = equation.includes("(") || equation.includes(")");

        if (!hasParenthesis) {
            setResult(eval(equation));
        } else {
            

        }
        
        setEquation("");
    }

    ["6", "5", "(3"]
    return <div>
        <div id="calculator">
            <h1>Texas Instruments TI-30XIIS™</h1>

            <div id="display">
                <h2>{equation}</h2>
                <h2>{result}</h2>
            </div>

            <div id="buttons">
                <div id="operations">
                    {operators.map((operator) => (
                        <Button
                            key={operator}
                            onClick={() => addToEquation(operator)}
                        >
                            {operator}
                        </Button>
                    ))}

                </div>
                
                <div id="numbers">
                    {[...Array(10).keys()].map((number) => (
                        <Button
                            key={number}
                            onClick={() => addToEquation(number)}
                        >{number}</Button>
                    ))}
                </div>

                <Button onClick={calculate}>=</Button>
            </div>
            
        </div>
    </div>
}

