import Add from "./pages/Add";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./pages/View";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Add/>}></Route>
                <Route path="/view" element={<View/>}></Route>
                <Route path="/edit/:editid" element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
