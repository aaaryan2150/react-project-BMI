import React, { useState, useMemo, useEffect } from 'react';

const Calculator = () => {
    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(50);
    const [bmiClass, setBmiClass] = useState('');

    function handleWeightChange(event) {
        setWeight(event.target.value);
    }

    function handleHeightChange(event) {
        setHeight(event.target.value);
    }

    const output = useMemo(() => {
        let calculatedweight = weight;
        let calculatedheight = Math.pow((height / 100), 2);
        let bmi = calculatedweight / calculatedheight;

        function getBMI(bmi) {
            if (bmi < 18.5) {
                return "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                return 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                return 'Overweight';
            } else if (bmi >= 30 && bmi < 35) {
                return 'Obesity Class I';
            } else if (bmi >= 35 && bmi < 40) {
                return 'Obesity Class II';
            } else if (bmi >= 40) {
                return 'Obesity Class III';
            } else {
                return 'Invalid BMI';
            }
        }

        const bmiCategory = getBMI(bmi);
        setBmiClass(bmiCategory);
        return [bmi.toFixed(2), bmiCategory];
    }, [height, weight]);

    useEffect(() => {
        const appBg = document.getElementById('app-bg');
        switch (bmiClass) {
            case "Underweight":
                appBg.style.backgroundColor = '#ffcccb'; // light red
                break;
            case "Normal weight":
                appBg.style.backgroundColor = '#90ee90'; // light green
                break;
            case "Overweight":
                appBg.style.backgroundColor = '#ffeb3b'; // light yellow
                break;
            case "Obesity Class I":
                appBg.style.backgroundColor = '#ff9800'; // light orange
                break;
            case "Obesity Class II":
                appBg.style.backgroundColor = '#ff5722'; // orange red
                break;
            case "Obesity Class III":
                appBg.style.backgroundColor = '#f44336'; // red
                break;
            default:
                appBg.style.backgroundColor = '#f0f0f0'; // default background
        }
    }, [bmiClass]);

    return (
        <div className='flex items-center justify-center min-h-screen' id='app-bg'>
            <div className='container-div flex-col align-middle p-6 bg-white rounded shadow-lg'>
                <div className="Heading mb-4">
                    <h1 className="text-4xl">BMI CALCULATOR</h1>
                </div>
                <div>
                    <div className="input mb-4">
                        <div className="weight mb-4">
                            <h1>Weight: {weight} kg</h1>
                            <input
                                type="range"
                                name="weightSlider"
                                min="40"
                                max="200"
                                step="1"
                                value={weight}
                                onChange={handleWeightChange}
                                className='w-full'
                            />
                        </div>
                        <div className="height">
                            <h1>Height: {height} cm</h1>
                            <input
                                type="range"
                                name="heightSlider"
                                min="40"
                                max="200"
                                step="1"
                                value={height}
                                onChange={handleHeightChange}
                                className='w-full'
                            />
                        </div>
                    </div>
                    <div className="output">
                        <h1>Your BMI is</h1>
                        <h1 className='text-2xl'>{output[0]}</h1>
                        <br />
                        <h1>{output[1]}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
