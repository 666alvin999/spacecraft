import React from "react";
import { StyleSheet, View, Text } from "react-native";
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: 20,
        position: "absolute",
        top: 55,
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#FEE2E2",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    message: {
        color: "#991B1B",
    },
});