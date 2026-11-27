import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main>
      <header>
        <div class="icon">⚛️</div> Site Powered by React
      </header>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
