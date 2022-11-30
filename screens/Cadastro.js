import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Input, Text, Button } from "react-native-elements";



export default function Cadastro({navigation}){

  const [email, setEmail]= useState(null)
  const [password, setPassword]= useState(null)
  const [nome, setNome]= useState(null)
  const [cpf, setCPF]= useState(null)
  const [rg, setRG]= useState(null)
  const [tefone, setTelefone]= useState(null)
  const [endereco, setEndereco]= useState(null)
  const [cep, setCEP]= useState(null)



  return (
    
    <View style = {styles.container}>
  
    <Text h4Style ={styles.h4} h4>Cadastre-se</Text>
   
    <Input inputStyle ={styles.input}
      placeholder=' Nome Completo'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setNome(value)}
      
    />

    <Input inputStyle ={styles.input}
      placeholder=' Telefone'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setTelefone(value)}
      
    />

    <Input inputStyle ={styles.input}
      placeholder='Endereço'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setEndereco(value)}
      
    />

    <Input inputStyle ={styles.input}
      placeholder=' CPF'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setCPF(value)}
    />


    <Input inputStyle ={styles.input}
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setEmail(value)}
    />

    <Input inputStyle ={styles.input}
      placeholder=' Crie uma senha'
      leftIcon={{ type: 'font-awesome' }}
      onChangeText={value => setPassword(value)}
    />
     
      <Button buttonStyle ={styles.button}
        title="Confirmar"
        onPress={() => Alert.alert(' Cadastro realizado com sucesso!')}
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
    justify:"center",
  },
  h4:{
    color:'#ffff',
    },
  input:{
    color:'#ffff',
    backgroundColor:'#701824'
  },

});