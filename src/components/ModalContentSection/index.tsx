import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contentAtom, modalSectionContent } from "../../recoil";
import { Section } from "../Section";
import { SketchPicker } from "react-color";
import "./styles.css";
import { Tag } from "../Tag";
import { SimpleText } from "../SimpleText";

interface ItagsContent {
  title: string;
  color?: string;
  id: string;
}

interface ISimpleText {
  content: string;
  id: string;
}

interface IContentSection {
  componentType: string;
  props: {
    data: any;
  };
}

const Components = {
  SimpleText: SimpleText,
  Tags: Tag,
};

const uuid = () => (Math.random() * 60).toString(16);

const ModalContentSection: React.FC = () => {
  const [{ visible }, setModalState] = useRecoilState(modalSectionContent);
  const [_, setState] = useRecoilState(contentAtom);
  const [headerTitle, setHeaderTitle] = useState<string>();
  const [active, setActive] = useState<string>();
  const [selectedTagColor, setSelectedTagColor] = useState("#dadada");
  const [inputTagValue, setInputTagValue] = useState<string>();
  const [simpleText, setSimpleText] = useState<string>();
  const [contentSection, setContentSection] = useState<IContentSection[]>([]);

  if (!visible) return null;

  function handleSave() {
    //@ts-ignore
    setState((prev) => ({
      ...prev,
      contentStructure: [
        ...prev.contentStructure,
        {
          componentType: "Section",
          props: {
            headerTitle,
            content: contentSection,
          },
        },
      ],
    }));
    setContentSection([]);
    setInputTagValue(undefined);
    setSimpleText(undefined);
    setHeaderTitle(undefined);
    setActive(undefined);
    setModalState({ visible: false });
  }

  return (
    <div className="Modal_TitleContentOverlay">
      <div className="Modal_ContentSection">
        <div className="Modal_ContentSectionEditable">
          <h3>Digite o título da section</h3>
          <input
            value={headerTitle}
            className="Modal_TitleContent_Input"
            type="text"
            onChange={(e) => setHeaderTitle(e.currentTarget.value)}
          />
          <Section headerTitle={headerTitle} content={[]} />
          {contentSection.map((content) =>
            //@ts-ignore
            React.createElement(Components[content.componentType], {
              ...content.props,
            })
          )}
          <button onClick={handleSave} className="Modal_TitleContent_Button">
            Salvar
          </button>
        </div>
        <div className="Modal_ContentSectionComponents">
          <div
            onClick={() => setActive("SimpleText")}
            className={
              active === "SimpleText"
                ? "Modal_ContentComponentItem active"
                : "Modal_ContentComponentItem"
            }
          >
            <p>Texto Simples</p>
            {active === "SimpleText" && (
              <div className="Modal_ContainerItemTab">
                <input
                  value={simpleText}
                  className="Modal_TitleContent_Input"
                  type="text"
                  onChange={(e) => setSimpleText(e.currentTarget.value)}
                />
                <button
                  onClick={() => {
                    if (!simpleText) return;

                    //@ts-ignore
                    setContentSection((prev) => [
                      ...(prev || []),
                      {
                        componentType: "SimpleText",
                        props: {
                          content: simpleText,
                        },
                      },
                    ]);
                  }}
                  className="Button_Add_Tab"
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div
            className={
              active === "Tags"
                ? "Modal_ContentComponentItem active"
                : "Modal_ContentComponentItem"
            }
            onClick={() => setActive("Tags")}
          >
            <p>Tags</p>
            {active === "Tags" && (
              <>
                <div className="Modal_ContainerItemTab">
                  <input
                    value={inputTagValue}
                    className="Modal_TitleContent_Input"
                    type="text"
                    onChange={(e) => setInputTagValue(e.currentTarget.value)}
                  />
                  <button
                    onClick={() => {
                      if (!inputTagValue) return;
                      const index = contentSection.length - 1;
                      const prevData = [...contentSection];

                      if (index > 0) {
                        prevData[index].props.data = [
                          ...prevData[index].props.data,
                          {
                            title: inputTagValue,
                            color: selectedTagColor,
                            id: uuid(),
                          },
                        ];
                      } else {
                        prevData.push({
                          componentType: "Tags",
                          props: {
                            data: [
                              {
                                title: inputTagValue,
                                color: selectedTagColor,
                                id: uuid(),
                              },
                            ],
                          },
                        });
                      }

                      setContentSection(prevData);
                    }}
                    className="Button_Add_Tab"
                  >
                    +
                  </button>
                </div>
                <div
                  style={{ backgroundColor: selectedTagColor }}
                  className="Modal_SectionTagSelectedColor"
                />
                <div className="Modal_PalletColor">
                  <SketchPicker
                    color={selectedTagColor}
                    onChange={(c) => setSelectedTagColor(c.hex)}
                  />
                </div>
              </>
            )}
          </div>
          <div className="Modal_ContentComponentItem">
            <p>• Paragrafo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalContentSection };
