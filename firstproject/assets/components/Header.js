import { TextInput, Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';


const Header = () => {
  return (
    
    <View style={{ padding: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{height: 50, width: 50, backgroundColor: 'blue', borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>
            <FontAwesome5 name="th-large" size={32} color="#FFFFFF" />
        </View>
        <View style={{height: 50, width: 50, backgroundColor: 'blue', borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>
            {/* <FontAwesome5 name="facebook" size={32} color="#FFFFFF" /> */}
            <Image source={require("../appIcon.png")} style={{height: 32, width: 32}}/>
        </View>
  

        {/* <Text style={{fontSize: 24, marginBottom: 20}}>Login</Text>
        <TextInput placeholder="Username" style={{backgroundColor: 'white', marginBottom: 10}} />
        <TextInput placeholder="Password" style={{backgroundColor: 'white', marginBottom: 20}} />
        <Button title="Login" onPress={() => {}} /> */}

    </View>
  )
}

export default Header

const styles = StyleSheet.create({})