import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { useState } from "react";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const theme = useSelector(state => state.theme)
  console.log(theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme />
      <Form />
      <WeatherCard />
    </div>
  );
}

export default App;
