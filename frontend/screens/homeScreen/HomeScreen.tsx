import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../allNavigations";
import Button from "../../components/button/Button";
import {
  StyledView,
  StyledLogo,
  StyledButtonGroup,
  StyledLogoWrapper,
} from "./StyledHomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <StyledView>
      <StyledLogoWrapper>
        <StyledLogo>CityPop</StyledLogo>
      </StyledLogoWrapper>

      <StyledButtonGroup>
        <Button
          onPress={() => navigation.navigate("SearchCity")}
          mode="outlined"
        >
          SEARCH BY CITY
        </Button>
        <Button
          onPress={() => navigation.navigate("SearchCountry")}
          mode="outlined"
        >
          SEARCH BY COUNTRY
        </Button>
      </StyledButtonGroup>
    </StyledView>
  );
}
