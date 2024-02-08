import {StarshipFeedScreen} from "./src/screen";
import {PaperProvider} from "react-native-paper";
import {SafeAreaView} from "react-native";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NetworkProvider} from 'react-native-offline';

export default function App() {
    const queryClient = new QueryClient
    return (
        <>
            <NetworkProvider>
                <QueryClientProvider client={queryClient}>
                    {/*<LoginScreen/>*/}
                    <PaperProvider>
                        <SafeAreaView/>
                        {/*<ScrollView>*/}
                        {/*    <TermsScreen/>*/}
                        {/*</ScrollView>*/}
                        <StarshipFeedScreen/>
                    </PaperProvider>
                </QueryClientProvider>
            </NetworkProvider>
        </>

    );
};
