// import styled from "styled-components/native";
// import { TextInput } from "react-native";
// import Button from "../components/Button";
// import Toast from "react-native-root-toast";
// import { useState } from "react";
// import api from "../../api";
// import screens from "../../screens.json";
// import TextField from "../components/TextField";
// import Container from "../components/Container";

// const initialNotepads = {
//   title: "",
//   subtitle: "",
//   content: "",
// };

// const textsCreateNotepad = {
//   titleText: "Digite o Título",
//   subtitleText: "Digite o Subtítulo",
//   contentText: "Digite o conteúdo",
//   submit: "Notepad criado com sucesso!",
// };

// // const Container = styled.View`
// //   margin: 14px;
// //   gap: 8px;
// // `;

// const CreateNotepadScreen = ({ navigation }) => {
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle] = useState("");
//   const [content, setContent] = useState("");

//   async function onSubmit() {
//     const response = await api.post("/notepads", {
//       title,
//       subtitle,
//       content,
//     });

//     Toast.show(textsCreateNotepad.submit);
//     resetForm();
//     navigation.navigate(screens.listNotepad);
//   }

//   function resetForm() {
//     setTitle(initialNotepads.title);
//     setSubTitle(initialNotepads.subtitle);
//     setContent(initialNotepads.content);
//   }

//   return (
//     <Container>
//       <TextField
//         placeholder={textsCreateNotepad.titleText}
//         onChangeText={setTitle}
//         value={title}
//       />
//       <TextField
//         placeholder={textsCreateNotepad.subtitleText}
//         onChangeText={setSubTitle}
//         value={subtitle}
//       />
//       <TextField
//         placeholder={textsCreateNotepad.contentText}
//         multiline
//         numberOfLines={6}
//         onChangeText={setContent}
//         value={content}
//       />
//       <Button onPress={onSubmit}>Enviar</Button>
//     </Container>
//   );
// };

// export default CreateNotepadScreen;

import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native";
import Button from "../components/Button";
import Toast from "react-native-root-toast";
import api from "../../api";
import screens from "../../screens.json";
import TextField from "../components/TextField";
import Container from "../components/Container";

const initialNotepads = {
  title: "",
  subtitle: "",
  content: "",
};

const textsCreateNotepad = {
  titleText: "Digite o Título",
  subtitleText: "Digite o Subtítulo",
  contentText: "Digite o conteúdo",
  submit: "Notepad criado com sucesso!",
  send: "Enviar",
};

const CreateNotepadScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Adicionado isLoading

  async function onSubmit() {
    setIsLoading(true); // Ativar isLoading durante a submissão

    try {
      const response = await api.post("/notepads", {
        title,
        subtitle,
        content,
      });

      Toast.show(textsCreateNotepad.submit);
      resetForm();
      navigation.navigate(screens.listNotepad);
    } catch (error) {
      console.error(error);
      // Lidar com erros de forma adequada
    } finally {
      setIsLoading(false); // Desativar isLoading após a conclusão da submissão
    }
  }

  function resetForm() {
    setTitle(initialNotepads.title);
    setSubTitle(initialNotepads.subtitle);
    setContent(initialNotepads.content);
  }

  return (
    <Container>
      <TextField
        placeholder={textsCreateNotepad.titleText}
        onChangeText={setTitle}
        value={title}
      />
      <TextField
        placeholder={textsCreateNotepad.subtitleText}
        onChangeText={setSubTitle}
        value={subtitle}
      />
      <TextField
        placeholder={textsCreateNotepad.contentText}
        multiline
        numberOfLines={6}
        onChangeText={setContent}
        value={content}
      />
      <Button isLoading={isLoading} onPress={onSubmit}>
        {textsCreateNotepad.send}
      </Button>
    </Container>
  );
};

export default CreateNotepadScreen;
