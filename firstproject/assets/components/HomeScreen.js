import {TextInput, Text, Button, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import Header from '../components/Header';
import ProductList from './ProductList';

const HomeScreen = () => {
  return (
    <LinearGradient
    colors={['#FDF0F3', '#FFFBFC']}
    style={{flex: 1, padding: 20}}
  >
    <Header/>
    <Text style={{fontSize: 30,fontWeight: 'bold', color: 'grey'}}>Match Your Style</Text>
    <View style={{height: 48, borderRadius: 12, alignItems: 'center', flexDirection: 'row', backgroundColor: '#FFFFFF', overflow: 'hidden', marginBottom: 5}}>
        <TextInput placeholder="Search" style={{ backgroundColor: 'white', borderRadius: 12, height: 48, fontSize: 20,flex: 1, paddingHorizontal: 10, }} />
    </View>
    <ProductList/>
    
    {/* <Text style={{fontSize: 24, marginBottom: 20}}>Login</Text>
    <TextInput placeholder="Username" style={{backgroundColor: 'white', marginBottom: 10}} />
    <TextInput placeholder="Password" style={{backgroundColor: 'white', marginBottom: 20}} />
    <Button title="Login" onPress={() => {}} /> */}
  </LinearGradient>


  )
}



export default HomeScreen;

