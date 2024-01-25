import React from "react";
import {FlatList, StatusBar, StyleProp, StyleSheet, View, ViewStyle} from "react-native";

import {default as data} from "../../api/data.json";
import {Item} from "./component";
import styled from "styled-components/native";

type ItemProps = {
    name: string,
    model: string,
    crew: string,
    hyperdrive_rating: string,
    cost_in_credits: string,
}

const StyledFlatList = styled(FlatList)`
  background-color: white;
`;

const StarshipFeedScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <StyledFlatList
                    data={data.results}
                    renderItem={
                        ({item}: { item: ItemProps }) =>
                            <Item
                                name={item.name}
                                model={item.model}
                                crew={item.crew}
                                hyperdrive_rating={item.hyperdrive_rating}
                                cost_in_credits={item.cost_in_credits}
                            />
                    }
                    ItemSeparatorComponent={() => <View style={{height: 20}} />}
                />
            </View>
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
    }
});

export default StarshipFeedScreen;