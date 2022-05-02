import { View, Text } from "react-native";
import React from "react";
import { StyledView, StyledButton } from "./StyledHomeScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../allNavigations";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <StyledView>
      <Text>Home</Text>
      <Text>Here is some default text.</Text>
    </StyledView>
  );
}
