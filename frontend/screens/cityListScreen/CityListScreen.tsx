import { useEffect } from "react";
import { City } from "../../store/city/types";
import { RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/city/citySlice";
import {
  StyledView,
  StyledTitleView,
  StyledContentView,
  StyledTitle,
  StyledPopulation,
  StyledText,
} from "./StyledCityListScreen";

interface Props {
  route: RouteProp<{ params: { city: City } }, "params">;
}

export default function CityListScreen({ route }: Props) {
  const { city, population } = route.params.city;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCity(null));
    };
  }, []);

  return (
    <StyledView>
      <StyledTitleView>
        <StyledTitle>{city}</StyledTitle>
      </StyledTitleView>

      <StyledContentView>
        <StyledText>POPULATION</StyledText>
        <StyledPopulation>{population}</StyledPopulation>
      </StyledContentView>
    </StyledView>
  );
}
