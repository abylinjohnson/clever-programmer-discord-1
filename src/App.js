import "./App.css";
import Search from "./components/Search";
import ColorList from "./components/colorList";
import { useState } from "react";

function App() {
  const COLORS = [
    { name: "blue" },
    { name: "purple" },
    { name: "pink" },
    { name: "red" },
    { name: "green" },
    { name: "black" },
    { name: "grey" },
    { name: "violet" },
    { name: "yellow" },
    { name: "teal" },
    { name: "aqua" },
    { name: "crimson" },
    { name: "chartreuse" },
    { name: "darkgrey" },
    { name: "cyan" },
    { name: "magenta" },
  ];
  const [searchText, setSearchText] = useState([]);
  console.log(searchText);
  return (
    <div className="container">
      <Search setSearchText={setSearchText} />
      <ColorList
        colors={COLORS.filter((color) =>
          color.name.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
}

export default App;
