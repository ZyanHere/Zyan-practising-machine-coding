import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/card"
          element={
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <Card
                imageUrl="https://miro.medium.com/v2/resize:fit:1400/1*TGATqkXS3Y1FVZIC4X-LzA.png"
                title="Card title"
                desc="Card description"
                buttonText="Click me"
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
