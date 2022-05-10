import { StyledView } from "./StyledSearchCountryScreen";
import Form from "../../components/form/Form";

export default function SearchCountryScreen() {
  const handleSearch = (searchword: string) => {
    // here goes logic for redux
    console.log(searchword);
  };

  return (
    <StyledView>
      <Form
        handleSearch={(searchword: string) => handleSearch(searchword)}
        title="SEARCH BY COUNTRY"
        placeholder="Enter a country"
      />
    </StyledView>
  );
}
