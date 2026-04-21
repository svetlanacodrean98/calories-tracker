import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [serverUrl, setServerUrl] = useState("http://localhost:8010/proxy");
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentMeal, setCurrentMeal] = useState({
    time: 0,
    food: "",
    energy: 0,
    weight: 0,
    fat: 0,
    saturated_fat: 0,
    carbs: 0,
    sugar: 0,
    fiber: 0,
    protein: 0,
    salt: 0,
  });

  function setTime(e) {
    setCurrentMeal({
      ...currentMeal,
      time: e.target.value,
    });
  }
  function setFood(e) {
    setCurrentMeal({
      ...currentMeal,
      food: e.target.value,
    });
  }
  function setEnergy(e) {
    setCurrentMeal({
      ...currentMeal,
      energy: Number(e.target.value),
    });
  }
  function setWeight(e) {
    setCurrentMeal({
      ...currentMeal,
      weight: Number(e.target.value),
    });
  }
  function setFat(e) {
    setCurrentMeal({
      ...currentMeal,
      fat: Number(e.target.value),
    });
  }
  function setSaturatedFat(e) {
    setCurrentMeal({
      ...currentMeal,
      saturated_fat: Number(e.target.value),
    });
  }
  function setCarbs(e) {
    setCurrentMeal({
      ...currentMeal,
      carbs: Number(e.target.value),
    });
  }
  function setSugar(e) {
    setCurrentMeal({
      ...currentMeal,
      sugar: Number(e.target.value),
    });
  }
  function setFiber(e) {
    setCurrentMeal({
      ...currentMeal,
      fiber: Number(e.target.value),
    });
  }
  function setProtein(e) {
    setCurrentMeal({
      ...currentMeal,
      protein: Number(e.target.value),
    });
  }
  function setSalt(e) {
    setCurrentMeal({
      ...currentMeal,
      salt: Number(e.target.value),
    });
  }

  useEffect(() => {
    fetch(`${serverUrl}/meals?date=${new Date().toISOString().slice(0, -14)}}}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedMeals(data.meals);
        console.log(data.meals);
      });
  }, [serverUrl, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ currentMeal });
    setIsLoading(true);
    await fetch(`${serverUrl}/meal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentMeal),
    });
    setIsLoading(false);
  };
  return (
    <>
      <h2>Insert new meal</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="time">Time: </label>
        <input
          name="time"
          id="time"
          type="datetime-local"
          value={currentMeal.time}
          onChange={setTime}
        />
        <label htmlFor="food">Food: </label>
        <input
          name="food"
          id="food"
          value={currentMeal.food}
          onChange={setFood}
        />
        <label htmlFor="energy">Energy (kcal): </label>
        <input
          name="energy"
          id="energy"
          type="number"
          step="0.1"
          value={currentMeal.energy}
          onChange={setEnergy}
        />
        <label htmlFor="weight">Weight (g): </label>
        <input
          name="weight"
          id="weight"
          type="number"
          step="0.1"
          value={currentMeal.weight}
          onChange={setWeight}
        />
        <label htmlFor="fat">Fat (g): </label>
        <input
          name="fat"
          id="fat"
          type="number"
          step="0.1"
          value={currentMeal.fat}
          onChange={setFat}
        />
        <label htmlFor="saturated_fat">Saturated Fat (g): </label>
        <input
          name="saturated_fat"
          id="saturated_fat"
          type="number"
          step="0.1"
          value={currentMeal.saturated_fat}
          onChange={setSaturatedFat}
        />
        <label htmlFor="carbs">Carbs (g): </label>
        <input
          name="carbs"
          id="carbs"
          type="number"
          step="0.1"
          value={currentMeal.carbs}
          onChange={setCarbs}
        />
        <label htmlFor="sugar">Sugar (g): </label>
        <input
          name="sugar"
          id="sugar"
          type="number"
          step="0.1"
          value={currentMeal.sugar}
          onChange={setSugar}
        />
        <label htmlFor="fiber">Fiber (g): </label>
        <input
          name="fiber"
          id="fiber"
          type="number"
          step="0.1"
          value={currentMeal.fiber}
          onChange={setFiber}
        />
        <label htmlFor="protein">Protein (g): </label>
        <input
          name="protein"
          id="protein"
          type="number"
          step="0.1"
          value={currentMeal.protein}
          onChange={setProtein}
        />
        <label htmlFor="salt">Salt (g): </label>
        <input
          name="salt"
          id="salt"
          type="number"
          step="0.1"
          value={currentMeal.salt}
          onChange={setSalt}
        />
        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>

      <h3>Today's meals</h3>
      {fetchedMeals.map((element, i) => (
        <div key={i}>{element.food}</div>
      ))}
    </>
  );
}

export default App;
