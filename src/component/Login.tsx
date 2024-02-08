import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const LoginView = styled.View`
    width: 100%;
    padding: 30px 20px;
    flex: 4;
    display: flex;
    align-items: center;
    gap: 30px;
`;

const InputView = styled.View`
    width: 100%;
    padding: 0 20px 10px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const LoginTextInput = styled(TextInput)`
    width: 100%;
`;

const LoginButton = styled(Button)`
    width: 80%;
    background-color: #9544b7;
`;

const DisclaimerText = styled(Text)`
    color: lightgray;
`;

const Login = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [password, setPassword] = useState<string>("");
    const navigation = useNavigation();

    function toggleSecureIcon() {
        setIsVisible(!isVisible);
    }

    function navigateToTerms() {
        navigation.navigate("Terms");
    }

    return (
        <LoginView>
            <InputView>
                <LoginTextInput
                    id="email"
                    keyboardType="email-address"
                    placeholder="E-mail"
                />

                <LoginTextInput
                    label="Password"
                    value={password}
                    secureTextEntry={isVisible}
                    onChangeText={(value: string) => setPassword(value)}
                    autoComplete="password"
                    right={
                        <TextInput.Icon
                            onPress={toggleSecureIcon}
                            icon={isVisible ? "eye-off" : "eye"}
                        />
                    }
                />
            </InputView>

            <LoginButton textColor="white">Login</LoginButton>
            <TouchableOpacity onPress={navigateToTerms}>
                <DisclaimerText>
                    by login you accept the Terms and Conditions .
                </DisclaimerText>
            </TouchableOpacity>
        </LoginView>
    );
};

export default Login;
