import { useEffect } from "react";
import Form from "../../components/form/Form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../allNavigations";
import { useDispatch, useSelector } from "react-redux";
import { citySelector, getCity } from "../../store/city/citySlice";
import { StyledView } from "./StyledSearchCityScreen";

type Props = NativeStackScreenProps<RootStackParamList, "SearchCity">;

export default function SearchCityScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const { city, loading } = useSelector(citySelector);

  const handleSearch = (searchword: string) => {
    dispatch(getCity(searchword));
  };

  useEffect(() => {
    city && navigation.navigate("CityList", { city });
  }, [city]);

  return (
    <StyledView>
      <Form
        loading={loading}
        handleSearch={(searchword: string) => handleSearch(searchword)}
        title="SEARCH BY CITY"
        placeholder="Enter a city"
      />
    </StyledView>
  );
}
