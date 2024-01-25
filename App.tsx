import {StarshipFeedScreen} from "./src/screen";
import {PaperProvider} from "react-native-paper";
import {SafeAreaView} from "react-native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function App() {
    const queryClient = new QueryClient
    return (
        <>
            <SafeAreaView/>
            <QueryClientProvider client={queryClient}>
                <PaperProvider>
                    {/*<LoginScreen/>*/}
                    {/*<ScrollView>*/}
                    {/*    <TermsScreen/>*/}
                    {/*</ScrollView>*/}
                    <StarshipFeedScreen/>
                </PaperProvider>
            </QueryClientProvider>

        </>

    );
};
