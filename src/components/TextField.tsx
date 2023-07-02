import styled from "styled-components/native";

const TextField = styled.TextInput`
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  border-width: 1px;
  border-color: ${(props) => (props.isFocused ? "#f9004d" : "#7f8c8d")};
`;

export default TextField;
