import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage"; // your original content

function App() {
  return (
    <>
      <Navbar /> {/* Sticky navbar */}
      <main className="pt-16">
        <HomePage /> {/* All your original content stays intact */}
      </main>
    </>
  );
}

export default App;
