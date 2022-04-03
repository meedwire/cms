import React from "react";
import * as Styles from "./styles";

interface Props {
  content: string;
}

const SimpleText: React.FC<Props> = ({ content }) => {
  return (
    <Styles.Container>
      <Styles.Title>{content}</Styles.Title>
    </Styles.Container>
  );
};

export { SimpleText };
