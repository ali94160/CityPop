import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Platform } from "react-native";
export const StyledButton = styled(Button)`
  margin: 3px;
  justify-content: center;
`;

export const StyledText = styled.Text`
  width: 100%;
  height: 100px !important;
  color: ${Platform.OS === "ios" ? "#006ee6" : "#000000"};
`;
