import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <MainContainer />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
