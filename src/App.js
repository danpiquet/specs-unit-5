import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import Loading from "./Components/Loading";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectLoading } from "./redux/slices/siteLoadingSlice";

function App() {
  let currentDisplay = useSelector(selectDisplay);
  console.log("Current Display: ", currentDisplay);
  let potentials = useSelector(selectPotentials);
  console.log(potentials);
  let isLoading = useSelector(selectLoading)
  return (
    <div className="App font-link">
      {isLoading && <Loading />}
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
