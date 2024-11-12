import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Box({ children, style }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}> {children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height:90,
        backgroundColor: "white",
        padding: 24,
        height:100,
        // width:100,
        borderWidth: 2,
        borderColor: "red", 
        borderRadius: 5,
        marginTop: 4,
        // marginLeft: 10,
        // marginRight: 10,
        
    },
    text: {
        fontSize:16,
        fontWeight: "bold",
        textAlign: "center",
        color:"red"
    },
});
