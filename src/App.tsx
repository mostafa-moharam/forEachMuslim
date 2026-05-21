import { Outlet } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

const App = () => {
  return (
    <div className="min-h-full">
      <Header />
      <div className="min-h-[calc(100vh-60px)] my-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
