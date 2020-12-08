import React, { useState } from "react";
import Map from "./Map";
import './SearchPlaces.css';

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <div className = "inputContainer">
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="맛집을 검색하세요"
          onChange={onChange}
          value={inputText}
          className = "mapInput"
        />
        <button type="submit" className = "mapButton"> 검색 </button>
      </form>
      <Map className = "myMap" searchPlaces={place} />
    </div>
  );
};

export default SearchPlace;