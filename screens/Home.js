import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";



export default function Home({navigation}){


    return (
    <View style = {styles.container}>
      <Image style ={styles.Image}
      source={require('../assets/logo.png')}
      />
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text h3>Bem-vindo a ASTEPI</Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Button buttonStyle ={styles.button}
     title="Entrar"
     onPress={()=> navigation.navigate('Login')} />
    <Text></Text>
    <Text></Text>
     <Button  buttonStyle ={styles.button}
     title="Cadastrar-se"
     onPress={()=> navigation.navigate('Cadastro')}/>


</View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Image:{
    width: 300,
    height: 250,
    borderRadius: 100 / 2
  },
  button:{
    backgroundColor:'#096842',
    width: 150,
    borderRadius:15,
  
    
  }
});