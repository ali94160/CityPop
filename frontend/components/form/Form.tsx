import React, { useState } from "react";
import {
  StyledTextInput,
  StyledView,
  StyledWrapper,
  StyledTitleWrapper,
  StyledTitle,
  StyledIconButton,
} from "./StyledForm";

interface Props {
  placeholder: string;
  title: string;
  handleSearch: (searchword: string) => void;
}

const Form = ({ placeholder, title, handleSearch }: Props) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <StyledView>
      <StyledTitleWrapper>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleWrapper>

      <StyledWrapper>
        <StyledTextInput
          mode="outlined"
          placeholder={placeholder}
          value={searchWord}
          onChangeText={(searchWord) => setSearchWord(searchWord)}
        />
        <StyledIconButton
          icon="magnify"
          size={35}
          onPress={() => handleSearch(searchWord)}
        />
      </StyledWrapper>
    </StyledView>
  );
};

export default Form;
