import Users from "./pages/users/Users";
import Edit from "./pages/edit/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delete from "./pages/delete/Delete";
import Add from "./pages/add/Add";
import AboutPage from "./pages/about/AboutPage";
import Records from "./pages/records/Records";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/records" element={<Records />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </main> 
  );
}

export default App;
