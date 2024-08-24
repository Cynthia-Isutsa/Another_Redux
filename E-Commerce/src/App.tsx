import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Slider/Main";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:type" element={<FilteredProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
