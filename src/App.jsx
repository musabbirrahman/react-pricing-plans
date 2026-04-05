import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import Pricings from "./Components/Pricings/Pricings";

const pricingPromise = fetch('pricing.json').then(res => res.json())

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
          <Pricings pricingPromise = {pricingPromise}></Pricings>
        </Suspense>
      </main>
    </>
  );
}

export default App;
