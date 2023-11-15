import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "react-native-tailwindcss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import store from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import WelcomeScreen from './screens/WelcomeScreen';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket"
          component={BasketScreen}
          options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
          options
          ={{presentation: "fullScreenModal", headerShown: false}}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen}
          options
          ={{presentation: "fullScreenModal", headerShown: false}}
        />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}