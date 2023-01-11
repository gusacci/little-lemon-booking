import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
