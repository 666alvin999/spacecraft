import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen, TermsScreen } from "~/screen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Terms"
                    component={TermsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
