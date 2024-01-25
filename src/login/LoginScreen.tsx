import { Text } from "react-native-paper";
import styled from "styled-components/native";
import React from "react";
import {Login} from "./component";

const Title = styled.View`
  background-color: #9544b7;
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = () => {
    return (
        <>
            <Title>
                <Text style={{fontWeight: "800", color: "white"}} variant="headlineLarge">SPACECRAFT</Text>
            </Title>
            <Login/>
        </>
    );
}

export default LoginScreen;