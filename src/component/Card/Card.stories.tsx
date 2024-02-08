// ./src/components/Card.stories.tsx

import React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

export default {
    title: "Card"
};

const LeftContent = (
    props: React.JSX.IntrinsicAttributes &
        ViewProps &
        React.RefAttributes<View> & {
            icon: IconSource;
            size?: number | undefined;
            color?: string | undefined;
            style?: StyleProp<ViewStyle>;
            theme?: ThemeProp | undefined;
        }
) => {
    return (
        <Avatar.Icon
            {...props}
            icon="folder"
        />
    );
};

export const Default = () => (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
        <Card>
            <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={LeftContent}
            />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
                <Button
                    mode="outlined"
                    onPress={() => console.log("Pressed")}
                >
                    Cancel
                </Button>
                <Button
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                >
                    Ok
                </Button>
            </Card.Actions>
        </Card>
    </View>
);

Default.story = {
    name: "Default"
};
