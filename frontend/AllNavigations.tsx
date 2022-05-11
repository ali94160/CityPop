import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import CountryListScreen from "./screens/countryListScreen/CountryListScreen";
import CityListScreen from "./screens/cityListScreen/CityListScreen";
import SearchCountryScreen from "./screens/searchCountryScreen/SearchCountryScreen";
import SearchCityScreen from "./screens/searchCityScreen/SearchCityScreen";
import { City } from "./store/city/types";
import { Country } from "./store/country/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  SearchCountry: undefined;
  SearchCity: undefined;
  CountryList: { country: Country };
  CityList: { city: City };
};

const AllNavigations = () => {
  const customOptions = {
    headerTransparent: true,
    headerTitle: "",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={customOptions}
          name="SearchCountry"
          component={SearchCountryScreen}
        />
        <Stack.Screen
          options={customOptions}
          name="SearchCity"
          component={SearchCityScreen}
        />
        <Stack.Screen
          options={customOptions}
          name="CountryList"
          component={CountryListScreen}
        />
        <Stack.Screen
          options={customOptions}
          name="CityList"
          component={CityListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigations;
