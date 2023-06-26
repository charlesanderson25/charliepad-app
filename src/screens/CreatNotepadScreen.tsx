import styled from "styled-components/native";
import { TextInput } from "react-native";
import Button from "../components/Button";
import Toast from "react-native-root-toast";

const Container = styled.View`
  margin: 14px;
`;

const TextField = styled.TextInput`
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  border-width: 1px;
`;

const CreateNotepadScreen = () => {
  return (
    <Container>
      <TextField placeholder="Digite o Título" />
      <Button
        onPress={() => {
          Toast.show("Fui clicado");
        }}
      >
        Enviar
      </Button>
    </Container>
  );
};

export default CreateNotepadScreen;
