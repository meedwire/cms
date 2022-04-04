import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";

import { Content, FakeSection, FakeTabs } from "./components";
import { ContentPanel } from "./components/ContentPanel";
import { Modal } from "./components/Modal";
import { createTheme, ThemeProvider } from "@mui/material";

const Components = [Content, FakeTabs, FakeSection];

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e8e8e",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className="App">
          <div className="Components">
            {Components.map((component) => React.createElement(component))}
          </div>
          <ContentPanel />
        </div>
        <Modal />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
