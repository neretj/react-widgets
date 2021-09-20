import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "./App.css";
import CalendarComponent from "./widgets";

function App() {
  return (
    <div className="app">
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <CalendarComponent />
      </div>
    </div>
  );
}

export default App;
