
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/create/CreatePage";
import EditPage from "./pages/edit/EditPage";
import HomePage from "./pages/home/HomePage";
import ModelPage from "./pages/models/ModelPage";
import NotFoundPage from "./pages/not found/NotFoundPage";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/model" element={<ModelPage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/edit" element={<EditPage/>}></Route>
        <Route path="*" element={< NotFoundPage/>}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App