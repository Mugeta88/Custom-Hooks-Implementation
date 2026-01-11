import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p>Current Input: {searchTerm}</p>
      <p>Debounced Value (after 500ms): {debouncedValue}</p>
    </div>
  );
}

export default DebounceSearchDemo;