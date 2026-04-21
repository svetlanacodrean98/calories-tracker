import { useEffect, useState } from "react";
import "./App.css";

const serverUrl = "http://localhost:3000";

function App() {
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

  function handleChange(e) {
    const { name, value, type } = e.target;
    setCurrentMeal((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
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
          onChange={handleChange}
        />
        <label htmlFor="food">Food: </label>
        <input
          name="food"
          id="food"
          value={currentMeal.food}
          onChange={handleChange}
        />
        <label htmlFor="energy">Energy (kcal): </label>
        <input
          name="energy"
          id="energy"
          type="number"
          step="0.1"
          value={currentMeal.energy}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight (g): </label>
        <input
          name="weight"
          id="weight"
          type="number"
          step="0.1"
          value={currentMeal.weight}
          onChange={handleChange}
        />
        <label htmlFor="fat">Fat (g): </label>
        <input
          name="fat"
          id="fat"
          type="number"
          step="0.1"
          value={currentMeal.fat}
          onChange={handleChange}
        />
        <label htmlFor="saturated_fat">Saturated Fat (g): </label>
        <input
          name="saturated_fat"
          id="saturated_fat"
          type="number"
          step="0.1"
          value={currentMeal.saturated_fat}
          onChange={handleChange}
        />
        <label htmlFor="carbs">Carbs (g): </label>
        <input
          name="carbs"
          id="carbs"
          type="number"
          step="0.1"
          value={currentMeal.carbs}
          onChange={handleChange}
        />
        <label htmlFor="sugar">Sugar (g): </label>
        <input
          name="sugar"
          id="sugar"
          type="number"
          step="0.1"
          value={currentMeal.sugar}
          onChange={handleChange}
        />
        <label htmlFor="fiber">Fiber (g): </label>
        <input
          name="fiber"
          id="fiber"
          type="number"
          step="0.1"
          value={currentMeal.fiber}
          onChange={handleChange}
        />
        <label htmlFor="protein">Protein (g): </label>
        <input
          name="protein"
          id="protein"
          type="number"
          step="0.1"
          value={currentMeal.protein}
          onChange={handleChange}
        />
        <label htmlFor="salt">Salt (g): </label>
        <input
          name="salt"
          id="salt"
          type="number"
          step="0.1"
          value={currentMeal.salt}
          onChange={handleChange}
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
