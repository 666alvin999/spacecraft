import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginScreen, StarshipFeedScreen, TermsScreen } from "~/screen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={Routes.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={Routes.TERMS_SCREEN}
                    component={TermsScreen}
                />
                <Stack.Screen
                    name={Routes.STARSHIP_FEED_SCREEN}
                    component={StarshipFeedScreen}
                    options={{ title: "Starships" }}
                />
                <Stack.Screen
                    name={Routes.STARSHIP_DETAIL_SCREEN}
                    component={StarshipFeedScreen}
                    options={{ title: "Starship" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
