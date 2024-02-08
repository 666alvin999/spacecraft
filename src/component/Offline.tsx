import React from "react";
import {Text, View} from "react-native";
import {useIsConnected} from "react-native-offline";

export const Offline = () => {
    const isConnected = useIsConnected();

    return (
        <View>
            <Text>
                {
                    !isConnected &&
                    <>You are disconnected</>
                }
            </Text>
        </View>
    );
};