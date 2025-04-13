import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { BackIcon } from "./ui/Icons/Svg";

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    textColor?: string;
    fontSize?: number;
    prefixIcon?: any;
    customStyle?:any;
}

const TextButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    textColor,
    prefixIcon,
    fontSize,
    customStyle,
}) => {

    const customTextColor = textColor ?? "#00bdff";

    return (
        <TouchableOpacity
            style={[styles.button]}
            onPress={onPress}
        >
            {
                prefixIcon && <View style={styles.prefix} >{prefixIcon}</View>
            }
            <Text style={[styles.text,customStyle, { color: customTextColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        // borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    text: {
        // fontSize: 18,
        fontWeight: "500",
    },
    prefix: {
        // backgroundColor:"red"
    }
});

export default TextButton;
