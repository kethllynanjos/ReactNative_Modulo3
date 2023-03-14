import React from "react";
import{ View, Text, Image, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "black",
          }}
          >
            The Last of Us é a melhor coisa que existe!!
          </Text>
          <Image
            source={ require('./assets/tlou.jpg')}
            style={{ width: 500, height: 800, alignSelf: "center" }}
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
        defaultValue="Digite aquiii!"
        />
    </ScrollView>
  );
}

export default Pokemon;