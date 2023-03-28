import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './components/BotaoProps.js';

const App = () => {
  const handlePress = (msg) => {
    console.log(msg);
  };

  return (
   <View style={StyleSheet.container}>
     <BotaoProps
     label="Oi" 
     corFundo="purple"
     msg={"botão 1"}
     />

    <BotaoProps
     label="Oi" 
     corFundo="red"
     msg={"botão 2"}
     />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
