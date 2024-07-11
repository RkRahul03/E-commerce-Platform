import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './HomeNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './assets/components/HomeScreen';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialBottomTabNavigator();



// const Tab = createBottomTabNavigator();
function Home() {
  return(
      <View>
        <Text>HOME</Text>
      </View>
  );
}

function Reorder() {
  return(
      <View>
        <Text>Reorder</Text>
      </View>
  );
}
function Cart() {
  return(
      <View>
        <Text>CART</Text>
      </View>
  );
}
function Account() {
  return(
      <View>
        <Text>Account</Text>
      </View>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}>
        <Tab.Screen name="HOME" component={HomeScreen}    options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name="REORDER" component={Reorder}  options={{
          tabBarLabel: 'Reorder',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="reorder-horizontal" color={color} size={26} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name="CART" component={Cart}  options={{
          tabBarLabel: 'CART',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name="ACCOUNT" component={Account}  options={{
          tabBarLabel: 'ACCOUNT',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
