import { Routes, Route } from "react-router";
import Root from "./pages/landing/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<Root />} />
    </Routes>
  );
}

export default App;
