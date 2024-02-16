import { SafeAreaView } from "react-native";
import { NetworkProvider } from "react-native-offline";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navigator from "~/navigation/Navigator";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <NetworkProvider>
                <QueryClientProvider client={queryClient}>
                    <PaperProvider>
                        <SafeAreaView />
                        <Navigator />
                    </PaperProvider>
                </QueryClientProvider>
            </NetworkProvider>
        </>
    );
}

export default App;

// export { default } from "./.storybook";
