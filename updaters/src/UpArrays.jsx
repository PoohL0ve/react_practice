import { useState } from "react";

function UpArrays() {
    const [foods, setFoods] = useState(["chocolate", "bread", "cheese"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById('foodInput').value="";

        setFoods(f => [...f, newFood]);

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <ul>
                {foods.map(
                    (food, index) => <li key={index} 
                    onClick={() => handleRemoveFood(index)}>{food}</li>
                )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default UpArrays