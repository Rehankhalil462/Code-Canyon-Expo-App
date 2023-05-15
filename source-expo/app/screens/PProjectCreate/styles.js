import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    contain: {
        padding: 20,
        paddingTop: 0,
        width: "100%"
    },
    textInput: {
        height: 46,
        backgroundColor: BaseColor.fieldColor,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        width: "100%"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    title : {
        marginTop: 20,
        marginBottom: 5
    },
    wrapContent: {
        flexWrap: "wrap",
        flexDirection: "row"
    },
});
