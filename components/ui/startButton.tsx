import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dispatch, SetStateAction } from "react";

type Props = {
    start: boolean,
    setStart: Dispatch<SetStateAction<boolean>>
}

export default function StartButton({ start, setStart }: Props) {
    return (
        <TouchableOpacity
            style={styles.startBtn}
            activeOpacity={0.8}
            onPress={() => setStart(true)}
        >
            <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    startBtn: {
        backgroundColor: "#2563eb", // bleu moderne
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 3,
        elevation: 6, // ombre Android
        shadowColor: "#000", // ombre iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    startText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
})