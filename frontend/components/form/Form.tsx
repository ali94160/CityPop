import { useState } from "react";
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
  loading: boolean;
}

const Form = ({ placeholder, title, handleSearch, loading }: Props) => {
  const [searchWord, setSearchWord] = useState("");
  const handlePress = () => {
    handleSearch(searchWord.trim().replace(/[0-9]/g, ""));
    setSearchWord("");
  };
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
          disabled={searchWord ? false : true}
          icon={loading ? "loading" : "magnify"}
          size={35}
          onPress={handlePress}
        />
      </StyledWrapper>
    </StyledView>
  );
};

export default Form;
