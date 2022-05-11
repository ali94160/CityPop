import { View, Text } from "react-native";
import React from "react";
import {
  StyledView,
  StyledTitleView,
  StyledContentView,
  StyledTitle,
  StyledPopulation,
  StyledText,
} from "./StyledCityListScreen";

export default function CityListScreen() {
  return (
    <StyledView>
      <StyledTitleView>
        <StyledTitle>City</StyledTitle>
      </StyledTitleView>

      <StyledContentView>
        <StyledText>POPULATION</StyledText>
        <StyledPopulation>population number</StyledPopulation>
      </StyledContentView>
    </StyledView>
  );
}
