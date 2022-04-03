import React from "react";
import "./styles.css";

interface IPropsTag {
  data?: {
    title: string;
    color?: string;
    id: string;
  }[];
}

const Tag: React.FC<IPropsTag> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="Tag_ContainerRow">
      {data.map((tag) => (
        <div
          style={{ backgroundColor: tag.color }}
          key={tag.id}
          className="Tag_Content"
        >
          <p>{tag.title}</p>
        </div>
      ))}
    </div>
  );
};

export { Tag };
