import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./components/User/User";
import Admin from "./components/Admin/Admin";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<User />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;