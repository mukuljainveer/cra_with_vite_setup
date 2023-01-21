import "./App.css";
import Homepage from "@screen/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
      {import.meta.env.REACT_APP_NAME}
      {console.log(this, window)}
    </div>
  );
}

export default App;
