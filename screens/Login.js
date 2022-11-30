import { NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Cadastro from "./Cadastro";






export default function Login({navigation}){

  const [email, setEmail]= useState(null)
  const [password, setPassword]= useState(null)


  return (
  <View style = {styles.container}>
  <Text h3Style ={styles.h3} h3> Login</Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Input inputStyle ={styles.input}
      placeholder='Digite seu E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope', }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
    />
     <Input inputStyle ={styles.input}
      placeholder='Digite sua Senha'
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
    />
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>


      <Button buttonStyle ={styles.button}
       title="Entrar"
       onPress={()=>Alert.alert('Você entrou!')}
       />
    
    
  
</View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#701824',
    alignItems: 'center',
    justifyContent: 'center',

  },

  button:{
    backgroundColor:'#096842',
    width: 150,
    borderRadius:15,
  },
  h3:{
   color:'#ffff'
  },
  input:{
    color:'#ffff'
  }
});