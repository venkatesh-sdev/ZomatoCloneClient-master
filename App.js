import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-url-polyfill/auto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// redux
import { Provider } from "react-redux";
import store from "./src/context/store";

import {
  BasketScreen,
  DeliverScreen,
  HomeScreen,
  PreparingOrderScreen,
  ResturantScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="RestaruntScreen"
              component={ResturantScreen}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="DeliverScreen"
              component={DeliverScreen}
              options={{ presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="BasketScreen"
              component={BasketScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
