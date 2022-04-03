import React, { useState } from "react";
import { uuid } from "../../utils";
import "./styles.css";

const initialData = [
  {
    title: "Tab1",
    contentID: uuid(),
  },
  {
    title: "Tab2",
    contentID: uuid(),
  },
  {
    title: "Tab3",
    contentID: uuid(),
  },
];

interface Props {
  data?: [
    {
      title: string;
      contentID: string;
    }
  ];
  isFake?: boolean;
  onSelect?: (id: string) => void;
}

const Tabs: React.FC<Props> = ({ data = initialData, onSelect }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="Tabs">
      <div className="Fake_TabContainer">
        {data.map((tab, i) => (
          <div
            onClick={() => {
              onSelect && onSelect(tab.contentID);
              setActive(i);
            }}
            key={tab.contentID}
            className={active === i ? "Fake_TabItem active" : "Fake_TabItem"}
          >
            <p>{tab.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Tabs };
