import React from 'react';
import styled from 'styled-components/native';

export default () => (
    <Container>
        <Title>Login</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    
  );



const Container = styled.View`
  background: #000
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`;

 const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  border: 2px solid #12E6C8;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`;

const ButtonSubmit = styled.TouchableOpacity`
  background-color: #871616;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
`;

 const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;