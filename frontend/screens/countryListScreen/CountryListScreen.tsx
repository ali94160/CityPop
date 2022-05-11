import React, { useEffect } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { Country } from "../../store/country/types";
import { setCountry } from "../../store/country/countrySlice";
import { RootStackParamList } from "../../AllNavigations";
import Button from "../../components/button/Button";
import {
  StyledView,
  StyledContentView,
  StyledTitleView,
  StyledTitle,
} from "./StyledCountryListScreen";

interface Props {
  route: RouteProp<{ params: { country: Country } }, "params">;
}
type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function CountryListScreen({ route }: Props) {
  const { country, cities } = route.params.country;
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    return () => {
      dispatch(setCountry(null));
    };
  }, []);

  return (
    <StyledView>
      <StyledTitleView>
        <StyledTitle>{country}</StyledTitle>
      </StyledTitleView>

      <StyledContentView>
        {cities.map((city) => (
          <Button
            key={city.id}
            onPress={() => navigation.navigate("CityList", { city })}
            mode="outlined"
          >
            {city.city}
          </Button>
        ))}
      </StyledContentView>
    </StyledView>
  );
}
