import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Wynagrodzenia from "./Wynagrodzenia";
import Koszty from "./Koszty";
import Podatek from "./Podatek";
import Waluty from "./Waluty";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/kalkulator-wynagrodzen" element={<Wynagrodzenia />} />
        <Route path="/kalkulator-kosztow" element={<Koszty />} />
        <Route path="/kalkulator-podatku-dochodowego" element={<Podatek />} />
        <Route path="/kalkulator-walutowy" element={<Waluty />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
