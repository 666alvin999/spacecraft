import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";

import StarshipCard from "~/component/Card";
import { useStarships } from "~/hooks/useStarships";

type StarshipCardProps = {
    name: string;
    model: string;
    crew: string;
    hyperdrive_rating: string;
    cost_in_credits: string;
};

const StyledFlatList = styled(FlatList)`
    background-color: white;
`;

const StarshipFeedScreen = () => {
    const { isLoading, isError, data, error } = useStarships();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {isLoading && (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                )}

                {isError && (
                    <View>
                        <Text>{`${error}`}</Text>
                    </View>
                )}

                {!(isLoading || isError) && (
                    <StyledFlatList
                        data={data.results}
                        renderItem={({ item }: { item: StarshipCardProps }) => (
                            <StarshipCard
                                name={item.name}
                                model={item.model}
                                crew={item.crew}
                                hyperdrive_rating={item.hyperdrive_rating}
                                cost_in_credits={item.cost_in_credits}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 20 }} />
                        )}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0 // only for Android to avoid status bar overlap
    },
    headerContainer: {
        marginTop: 20,
        paddingHorizontal: 20
    }
});

export default StarshipFeedScreen;
