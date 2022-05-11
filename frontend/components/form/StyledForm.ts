import styled from "styled-components/native";
import { TextInput, IconButton } from "react-native-paper";

export const StyledTextInput = styled(TextInput)`
  width: 95%;
  margin: 0 auto;
  text-align: center;
`;

export const StyledView = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const StyledIconButton = styled(IconButton)`
  border: 1px solid black;
  margin: 20px;
`;

export const StyledWrapper = styled.View`
  align-items: center;
  margin-top: 3%;
`;

export const StyledTitleWrapper = styled.View`
  height: 150px;
  width: 60%;
  height: 50%;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
