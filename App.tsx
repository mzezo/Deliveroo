/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/HomeScreen';
import RestaurantScreen from './screens/Restaurant/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CartScreen from './screens/Cart/CartScreen';
import PreparingOrderScreen from './screens/Order/PreparingOrderScreen';
import DeliveryScreen from './screens/Delivery/DeliveryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Cart" component={CartScreen} 
              options={{presentation: 'modal', headerShown: false}} />
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}  
              options={{presentation: "fullScreenModal", headerShown: false}} />
            <Stack.Screen name="Delivery" component={DeliveryScreen}  
              options={{presentation: "fullScreenModal", headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
};

export default App;
