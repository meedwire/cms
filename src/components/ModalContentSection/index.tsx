import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contentAtom, modalSectionContent } from "../../recoil";
import { Section } from "../Section";
import { SketchPicker } from "react-color";
import { Tag } from "../Tag";
import { SimpleText } from "../SimpleText";
import {
  Button,
  Collapse,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Input } from "../Input";
import {
  Add,
  ExpandLess,
  ExpandMore,
  FormatIndentIncrease,
  Inbox,
  StarBorder,
  TextFields,
} from "@mui/icons-material";
import { ItemListSimpleText, ItemListTags } from "./components";

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
  const [_, setState] = useRecoilState(contentAtom);
  const [headerTitle, setHeaderTitle] = useState<string>();
  const [active, setActive] = useState<string>();
  const [selectedTagColor, setSelectedTagColor] = useState("#dadada");
  const [inputTagValue, setInputTagValue] = useState<string>();
  const [simpleText, setSimpleText] = useState<string>();
  const [contentSection, setContentSection] = useState<IContentSection[]>([]);
  const [openSimpleText, setOpenSimpleText] = useState(false);
  const [openSimpleParagraph, setOpenSimpleParagraph] = useState(false);

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
  }

  return (
    <>
      <DialogTitle>Digite o título da section</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Input
              value={headerTitle}
              onChangeText={(text) => setHeaderTitle(text)}
            />
            <Section headerTitle={headerTitle} content={[]} />
          </Grid>
          <Grid item md={6}>
            <List
              subheader={
                <ListSubheader component="div">
                  Itens disponiveis para section
                </ListSubheader>
              }
            >
              <ItemListSimpleText />
              <ItemListTags />
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Cancelar</Button>
        <Button>Salvar</Button>
      </DialogActions>
    </>
  );
};

export { ModalContentSection };

// <div className="Modal_ContentSection">
//   <div className="Modal_ContentSectionEditable">
//     <Section headerTitle={headerTitle} content={[]} />
//     {contentSection.map((content) =>
//       //@ts-ignore
//       React.createElement(Components[content.componentType], {
//         ...content.props,
//       })
//     )}
//     <button onClick={handleSave} className="Modal_TitleContent_Button">
//       Salvar
//     </button>
//   </div>
//   <div className="Modal_ContentSectionComponents">
//     <div
//       onClick={() => setActive("SimpleText")}
//       className={
//         active === "SimpleText"
//           ? "Modal_ContentComponentItem active"
//           : "Modal_ContentComponentItem"
//       }
//     >
//       <p>Texto Simples</p>
//       {active === "SimpleText" && (
//         <div className="Modal_ContainerItemTab">
//           <input
//             value={simpleText}
//             className="Modal_TitleContent_Input"
//             type="text"
//             onChange={(e) => setSimpleText(e.currentTarget.value)}
//           />
//           <button
//             onClick={() => {
//               if (!simpleText) return;

//               //@ts-ignore
//               setContentSection((prev) => [
//                 ...(prev || []),
//                 {
//                   componentType: "SimpleText",
//                   props: {
//                     content: simpleText,
//                   },
//                 },
//               ]);
//             }}
//             className="Button_Add_Tab"
//           >
//             +
//           </button>
//         </div>
//       )}
//     </div>
//     <div
//       className={
//         active === "Tags"
//           ? "Modal_ContentComponentItem active"
//           : "Modal_ContentComponentItem"
//       }
//       onClick={() => setActive("Tags")}
//     >
//       <p>Tags</p>
//       {active === "Tags" && (
//         <>
//           <div className="Modal_ContainerItemTab">
//             <input
//               value={inputTagValue}
//               className="Modal_TitleContent_Input"
//               type="text"
//               onChange={(e) => setInputTagValue(e.currentTarget.value)}
//             />
//             <button
//               onClick={() => {
//                 if (!inputTagValue) return;
//                 const index = contentSection.length - 1;
//                 const prevData = [...contentSection];

//                 if (index > 0) {
//                   prevData[index].props.data = [
//                     ...prevData[index].props.data,
//                     {
//                       title: inputTagValue,
//                       color: selectedTagColor,
//                       id: uuid(),
//                     },
//                   ];
//                 } else {
//                   prevData.push({
//                     componentType: "Tags",
//                     props: {
//                       data: [
//                         {
//                           title: inputTagValue,
//                           color: selectedTagColor,
//                           id: uuid(),
//                         },
//                       ],
//                     },
//                   });
//                 }

//                 setContentSection(prevData);
//               }}
//               className="Button_Add_Tab"
//             >
//               +
//             </button>
//           </div>
//           <div
//             style={{ backgroundColor: selectedTagColor }}
//             className="Modal_SectionTagSelectedColor"
//           />
//           <div className="Modal_PalletColor">
//             <SketchPicker
//               color={selectedTagColor}
//               onChange={(c) => setSelectedTagColor(c.hex)}
//             />
//           </div>
//         </>
//       )}
//     </div>
//     <div className="Modal_ContentComponentItem">
//       <p>• Paragrafo</p>
//     </div>
//   </div>
// </div>;
