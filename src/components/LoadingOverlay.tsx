import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useGlobalState } from "../../useGlobalState";

const Overlay = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: "#34495eee";
  z-index: 1;
`;

const LoadingOverlay = () => {
  const { isLoading } = useGlobalState(
    (state: { isLoading: boolean }) => state
  ) as { isLoading: boolean };

  if (!isLoading) {
    return null;
  }

  return (
    <Overlay>
      <ActivityIndicator size={64} color="#ecf0f1" />
    </Overlay>
  );
};

export default LoadingOverlay;
