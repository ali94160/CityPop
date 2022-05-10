import { StyledView } from "./StyledSearchCityScreen";
import Form from "../../components/form/Form";

export default function SearchCityScreen() {
  const handleSearch = (searchword: string) => {
    // here goes logic for redux
    console.log(searchword);
  };
  return (
    <StyledView>
      <Form
        handleSearch={(searchword: string) => handleSearch(searchword)}
        title="SEARCH BY CITY"
        placeholder="Enter a city"
      />
    </StyledView>
  );
}
