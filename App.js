import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import { NativeRouter, Route, Link, Routes } from "react-router-native";


export default function App() {
  return (
    <View style={styles.container}>
      
      
      
      <Text> mobile app development interesting for me.....</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/service"><Text>Service</Text></Link>
        <Routes>
        <Route path="/home" element={<Home></Home>}>  </Route>
        <Route path="/service" element={<Services></Services>}/>
        </Routes>

      
      </NativeRouter>

    </View>
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
