import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const fetchitems = async () => {
    try {
      const response = await fetch(
        "https://deploy-4y61.onrender.com/api/items"
      );
      const json = await response.json();
      setItems(json.results);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };
  useEffect(() => {
    fetchitems();
  }, []);
  console.info(items, "items");
  return (
    <p>
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        count is: {count}
      </button>
    </p>
  );
}
