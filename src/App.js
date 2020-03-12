import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

// Async functions
import { fetchShow } from './api/fetchShow';

// Helper functions
import { formatSeasons } from "./utils/formatSeasons";

// Component imports
import Episodes from "./components/Episodes";

// Styles
import "./styles.css";

// The main App component
export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  const dummySeasons = {
    "Season 1": [
      {
        id: 553946,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 1,
        number: 1,
        name: "Mock Chapter One",
        summary: "<p>Summary</p>",
        runtime: 60
      },
      {
        id: 553947,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        },
        season: 1,
        number: 2,
        name: "Mock Chapter Two",
        summary: "<p>Summary</p>",
        runtime: 60
      }
    ]
  }

  useEffect(() => {
    fetchShow()
      .then(res => {
        console.log("App | Res:", res)
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      })
  }, []);

  const handleSelect = e => {
    console.log("The selected season is:", e.value)
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
