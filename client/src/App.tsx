import Main from "./components/Main-1/main-1";
import Main2 from "./components/Main-2/main-2";
import Companies from "./components/Companies/companies";
import Features from "./components/Features/features";
import Welcome from "./components/Welcome/welcome";
import Tellmewhy from "./components/Tellmewhy/tellmewhy";
import Features2 from "./components/Features-2/features-2";
import Pricing from "./components/Pricing/pricing";
import Questions from "./components/Questions/questions";
import Highlights from "./components/Highlights/highlights";
import Footer from "./components/Footer/footer";

import GlobalStyleComponent from "./styles/global";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/navbar";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

import "./App.css";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="Body_page">
          <GlobalStyleComponent />
          <Navbar toggleTheme={toggleTheme} />
          <Main />
          <Main2 />
          <Companies />
          <Features />
          <Tellmewhy />
          <Features2 />
          <Welcome />
          <Pricing />
          <Questions />
          <Highlights />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
