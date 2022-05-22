import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        id="inputSearch"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input id="btnNav" type="submit" value="Agregar" />
    </form>
  );
}
