import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Slider/Main";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <Slider /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
