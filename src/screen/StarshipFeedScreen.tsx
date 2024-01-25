import React from "react";
import {FlatList, ListRenderItemInfo, StatusBar, StyleSheet, View} from "react-native";

import {default as data} from "../../api/data.json";
import {Item} from "./component";
import {Text} from "react-native-paper";

type ItemProps = {
    name: string,
    model: string,
    crew: string,
    hyperdrive_rating: string,
    cost_in_credits: string
}
const renderItem = (item: ItemProps) => {
    return (
        <>
            <Text>Name: {item.name}</Text>
            <Text>Model: {item.model}</Text>
            <Text>Crew: {item.crew}</Text>
            <Text>Hyperdrive Rating: {item.hyperdrive_rating}</Text>
            <Text>Cost in Credits: {item.cost_in_credits}</Text>
        </>
    );
};

const StarshipFeedScreen = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                renderItem={
                    renderItem
                }/>

            {/*<View style={styles.headerContainer}>*/}
            {/*    <Text>{JSON.stringify(data)}</Text>*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    },
    headerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default StarshipFeedScreen;