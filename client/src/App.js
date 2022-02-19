import { BrowserRouter,Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Adduser from "./components/users/Add";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addUser" element={<Adduser />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
