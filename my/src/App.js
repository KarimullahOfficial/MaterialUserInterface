import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Menu from "./Page/Menu";
import Pagenotfound from "./Page/Pagenotfound";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/menu" element={<Menu></Menu>}></Route>
            <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      ;
    </>
  );
};

export default App;
