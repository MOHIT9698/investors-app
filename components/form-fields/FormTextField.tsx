import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'

interface MainProps {
    value: string;
    placeholder: string;
    label?: string;
    keyboardType?: "default" | "email-address" | "phone-pad" | "numeric" | "decimal-pad" | "number-pad";
    secureTextEntry?: boolean;
    error?: boolean;
    onChange: (data: any) => void;
    maxLength?: number;
    textColor?: string;

}

const FormTextField = ({
    value,
    placeholder,
    label,
    onChange,
    keyboardType = "default",
    secureTextEntry = false,
    maxLength,
    error,
    textColor,
}: MainProps) => {
    const [isFocused, setIsFocused] = useState(false);


    const customeOnChange = (e: any) => {
        if (onChange) {
            onChange(e);
        };
    };




    return (
        <View>
            {label && <Text style={styles.label}  >{label}</Text>}
            <TextInput
                style={[styles.input, error && { borderColor: "red", borderWidth: 1 }, textColor && { color: textColor }]}
                placeholder={placeholder ?? "Enter"}
                onChangeText={customeOnChange}
                value={value}
                onFocus={() => setIsFocused(true)}  // Set focus state
                onBlur={() => setIsFocused(false)}  // Remove focus state
                placeholderTextColor={"#85929e"}
                keyboardType={keyboardType}

                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
            />
        </View>
    )
}

export default FormTextField;


const styles = StyleSheet.create({

    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,

    },
    label: {
        fontSize: 16,
        color: "#566573",
        // marginLeft:10,
        marginBottom: 5

    },
    inputFocused: {
        borderColor: "#00bdff", // Active (focused) border color
        borderWidth: 2, // Slightly thicker border when active
    },
    error: {
        borderColor: "#00bdff", // Active (focused) border color
        borderWidth: 2, // Slightly thicker border when active
    },
});
