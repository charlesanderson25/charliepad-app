// import styled from "styled-components/native";

// const ButtonContainer = styled.TouchableOpacity`
//   background-color: #f9004d;
//   border-radius: 8px;
//   padding-vertical: 8px;
//   padding-horizontal: 16px;
// `;

// const ButtonText = styled.Text`
//   color: white;
//   text-transform: uppercase;
//   font-size: 16px;
//   text-align: center;
//   font-weight: bold;
// `;

// const Button = ({ children, onPress, style }) => {
//   return (
//     <ButtonContainer onPress={onPress} style={style}>
//       <ButtonText>{children}</ButtonText>
//     </ButtonContainer>
//   );
// };

// export default Button;

import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: #f9004d;
  border-radius: 8px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => Promise<void>;
  style?: any;
  isLoading: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  style,
  isLoading = false,
}) => {
  return (
    <ButtonContainer onPress={onPress} style={style} disable={isLoading}>
      {isLoading && <ActivityIndicator size={30} color="#ecf0f1" />}
      {!isLoading && <ButtonText>{children}</ButtonText>}
    </ButtonContainer>
  );
};

export default Button;
