import { useEffect } from "react";
import Form from "../../components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { countrySelector, getCountry } from "../../store/country/countrySlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../AllNavigations";
import { StyledView } from "./StyledSearchCountryScreen";

type Props = NativeStackScreenProps<RootStackParamList, "SearchCountry">;

export default function SearchCountryScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { country, loading } = useSelector(countrySelector);

  const handleSearch = (searchword: string) => {
    dispatch(getCountry(searchword));
  };

  useEffect(() => {
    country && navigation.navigate("CountryList", { country });
  }, [country]);

  return (
    <StyledView>
      <Form
        loading={loading}
        handleSearch={(searchword: string) => handleSearch(searchword)}
        title="SEARCH BY COUNTRY"
        placeholder="Enter a country"
      />
    </StyledView>
  );
}
