import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Monstro = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "blue",
          }}
        >  
          Cantinho pra desabafar para o monstro 
        </Text>
        <Image
          source={require('./assets/ramondino.jpeg')}          
          style={{ width: 200, height: 210, alignSelf: "center" }}
          />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Desabafa aqui men!"
      />
      </ScrollView>
    );
  }

  export default Monstro;
