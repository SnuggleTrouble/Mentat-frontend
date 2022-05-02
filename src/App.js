import { Outlet } from "react-router-dom";
import { Navbar } from "components";

function App() {
  return (
    <div className=" bg-emerald-50 ">
      <Navbar />
      <Outlet />
    <footer className="p-5 flex flex-col justify-items-center flex-wrap justify-between align-middles">
    <p className="flex justify-center">
    Made with ❤️ in Europe 🇪🇺 by  <a href="https://twitter.com/productandres">@productandres & @stälebjørdal</a> </p>
  
    </footer>
    </div>
  );
}

export default App;
