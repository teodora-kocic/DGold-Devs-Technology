// import { useState } from 'react'

import "./App.css";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Card
        title="This is a simple Counter app"
        imageUrl="https://cdn-icons-png.flaticon.com/512/6599/6599020.png"
        text="A simple counting app with a clean and uncluttered user interface.
        Counts can easily be incremented and decremented, however exporting
        count data for further analysis is not possible."
        subTitle="Try it!"
      />
      <Counter />
    </div>
  );
}

export default App;
