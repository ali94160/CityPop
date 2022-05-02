import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import CountryListScreen from "./screens/countryListScreen/CountryListScreen";
import CityListScreen from "./screens/cityListScreen/CityListScreen";
import SearchCountryScreen from "./screens/searchCountryScreen/SearchCountryScreen";
import SearchCityScreen from "./screens/searchCityScreen/SearchCityScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  SearchCountry: undefined;
  SearchCity: undefined;
  CountryList: undefined;
  CityList: undefined;
};

const AllNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SearchCountry" component={SearchCountryScreen} />
        <Stack.Screen name="SearchCity" component={SearchCityScreen} />
        <Stack.Screen name="CountryList" component={CountryListScreen} />
        <Stack.Screen name="CityList" component={CityListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigations;
