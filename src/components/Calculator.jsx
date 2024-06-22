import React, { useState, useMemo } from 'react'

const Calculator = () => {
    const [weight,setWeight] = useState(200);
    const [height,setHeight] = useState(80);
    const [bmiClass,setBmiClass] = useState("None");

    function HandleWeightChange(event){
        setWeight(event.target.value)
    }

    function HandleHeightChange(event){
        setHeight(event.target.value)
    }

    const output = useMemo(()=>{
        let calculatedweight = weight;
        let calculatedheight = Math.pow((height/100),2);
        let bmi = calculatedweight/calculatedheight;

        // return bmi.toFixed(2)

        function getBMI (bmi){
            if (bmi<18.5){
                return "Underweight"
            }else if(bmi >= 18.5 && bmi < 25){
                return 'Normal weight';
            }else if (bmi >= 25 && bmi < 30) {
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
        
        return [bmi.toFixed(2),getBMI (bmi) ]

    },[height,weight]) 

  return (
    <div>
      <h1 className="text-4xl">BMI CALCULATOR</h1>
      <br />
      <h1>Weight: {weight} kg</h1>
      <input
        type="range"
        id="mySlider"
        name="mySlider"
        min="40"
        max="200"
        step="1"
        onChange={HandleWeightChange}
      ></input>
      <br />
      <h1>Height: {height} cm</h1>
      <input
        type="range"
        id="mySlider"
        name="mySlider"
        min="40"
        max="200"
        step="1"
        onChange={HandleHeightChange}
      ></input>
      <br />
      <h1>Your BMI is </h1>
      <h1>{output[0]}</h1>
      <br/>
      <h1>{output[1]}</h1>
    </div>
  );
}

export default Calculator
