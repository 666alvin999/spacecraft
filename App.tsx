import { SafeAreaView } from "react-native";
import { NetworkProvider } from "react-native-offline";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StarshipFeedScreen } from "./src/screen";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <NetworkProvider>
                <QueryClientProvider client={queryClient}>
                    {/*<LoginScreen/>*/}
                    <PaperProvider>
                        <SafeAreaView />
                        {/*<ScrollView>*/}
                        {/*    <TermsScreen/>*/}
                        {/*</ScrollView>*/}
                        <StarshipFeedScreen />
                    </PaperProvider>
                </QueryClientProvider>
            </NetworkProvider>
        </>
    );
}

// export default App;

export { default } from "./.storybook";
