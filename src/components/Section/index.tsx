import React from "react";
import { SimpleText } from "../SimpleText";
import { Tag } from "../Tag";
import "./styles.css";

interface IPropsSection {
  headerTitle?: string;
  content: any[];
}

const Components = {
  SimpleText: SimpleText,
  Tags: Tag,
};

const Section: React.FC<IPropsSection> = ({ headerTitle, content }) => {
  return (
    <div className="Style_SectionContainer">
      <p>{headerTitle || "Header Title"}</p>

      {content.map((content) =>
        //@ts-ignore
        React.createElement(Components[content.componentType], {
          ...content.props,
        })
      )}
    </div>
  );
};

export { Section };
