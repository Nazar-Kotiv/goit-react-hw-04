// import { useState, useEffect } from "react";

import SearchBar from "../SearchBar/SearchBar";

import "./App.css";

export default function App() {
  const hendleSubmit = () => {
    console.log("hello");
  };

  return (
    <>
      <SearchBar onSubmit={hendleSubmit}> </SearchBar>
    </>
  );
}
