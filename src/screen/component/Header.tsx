import {Text} from "react-native-paper";
import React from "react";
import styled from "styled-components/native";

const TitleView = styled.View`
  background-color: #9544b7;
  width: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(Text)`
  font-weight: 800;
  color: white;
`;

const Header = () => {
    return (
        <TitleView>
            <TitleText style={{fontWeight: "800", color: "white"}} variant="headlineLarge">SPACECRAFT</TitleText>
        </TitleView>
    );
};

export default Header;