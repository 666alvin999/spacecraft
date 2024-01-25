import {StarshipFeedScreen} from "./src/screen";
import {PaperProvider} from "react-native-paper";
import {SafeAreaView} from "react-native";

export default function App() {
    return (
        <>
            <SafeAreaView/>
            <PaperProvider>
                {/*<LoginScreen/>*/}
                {/*<ScrollView>*/}
                {/*    <TermsScreen/>*/}
                {/*</ScrollView>*/}
                <StarshipFeedScreen/>
            </PaperProvider>
        </>

    );
};
