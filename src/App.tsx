import { useState } from "react";
import "./App.scss";
import Header from "./Component/Header";
import MainRoutes from "./routes/mainRoutes";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <body
      style={{
        background: darkMode ? "black" : "white",
        paddingBottom: "344px",
        transition: ".5s",
      }}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <MainRoutes darkMode={darkMode}/>
    </body>
  );
}

export default App;
