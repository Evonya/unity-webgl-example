import React from "react";
import UnityLoader from "./components/UnityLoader";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Le Juste Jaune</h1>
        <p>Welcome to the game! Enjoy playing.</p>
      </header>
      <main>
        <UnityLoader />
      </main>
      <footer className="app-footer">
        <p>Created by Java IDE</p>
      </footer>
    </div>
  );
}

export default App;
