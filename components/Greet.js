import react from "react";
import {View , Text} from 'react-native';

export default function({name}) {
    return(
        <View>
            <Text>
                Hi! {name}
            </Text>
        </View>
    )
}