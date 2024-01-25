import {Text} from "react-native-paper";

type ItemProps = {
    name: string,
    model: string,
    crew: string,
    hyperdrive_rating: string,
    cost_in_credits: string
}
const Item = ({name, model, crew, hyperdrive_rating, cost_in_credits}: ItemProps) => {
    return (
        <>
            <Text>Name: {name}</Text>
            <Text>Model: {model}</Text>
            <Text>Crew: {crew}</Text>
            <Text>Hyperdrive Rating: {hyperdrive_rating}</Text>
            <Text>Cost in Credits: {cost_in_credits}</Text>
        </>
    );
}

export default Item;