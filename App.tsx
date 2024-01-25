import { ScrollView } from "react-native";
import {LoginScreen, StarshipFeedScreen, TermsScreen} from "./src/screen";
import {PaperProvider} from "react-native-paper";

export default function App() {
    return (
        <PaperProvider>
            {/*<LoginScreen/>*/}
            {/*<ScrollView>*/}
            {/*    <TermsScreen/>*/}
            {/*</ScrollView>*/}
            <StarshipFeedScreen/>
        </PaperProvider>
    );
};
