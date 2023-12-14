import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <h1>Let's calculate</h1>
      <Calculator />
      <footer>
        This app is coded by{" "}
        <a
          href="https://www.linkedin.com/in/kamogelo-m-4a9425298/"
          target="_blank"
          rel="noreferrer"
        >
          Kamogelo
        </a>{" "}
        and open-source on Github
      </footer>
    </div>
  );
}

export default App;
