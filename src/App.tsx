import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";

import { Content, FakeSection, FakeTabs } from "./components";
import { ContentPanel } from "./components/ContentPanel";
import { Modal } from "./components/Modal";
import { ModalContentSection } from "./components/ModalContentSection";
import { ModalTabs } from "./components/ModalTabs";

const Components = [Content, FakeTabs, FakeSection];

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="Components">
          {Components.map((component) => React.createElement(component))}
        </div>
        <ContentPanel />
      </div>
      <ModalTabs />
      <ModalContentSection />
      <Modal />
    </RecoilRoot>
  );
}

export default App;
