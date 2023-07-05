import { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search country"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
