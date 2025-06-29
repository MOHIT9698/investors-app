// src/components/FormTextField.tsx
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

interface Props {
    value: string | number| any;
    placeholder: string;
    label?: string;
    onChange: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "phone-pad" | "numeric" | "decimal-pad" | "number-pad";
    error?: string;
    isMultiline?: boolean;
    disabled?: boolean;
    numberOfLines?: number;
}

const CustomTextInput = ({
    value,
    placeholder,
    label,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    error,
    isMultiline = false,
    numberOfLines = 2,
    disabled = false,
}: Props) => {

    const handleChange = (text: string) => {
        if (onChange) {
            onChange(text);
        }
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (Platform.OS !== 'web') Keyboard.dismiss();
            }}
            accessible={false}
        >
            <View style={styles.container}>
                {label && <Text style={styles.label}  >{label}</Text>}

                <TextInput
                    style={[
                        styles.textarea,
                        { height: numberOfLines * 24 },
                        disabled && { backgroundColor: "#ccd1d1" },
                        error && { borderColor: "red" }
                    ]}
                    value={value}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                    placeholderTextColor="#999"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    multiline={isMultiline}
                    numberOfLines={numberOfLines}
                    editable={!disabled}
                />
                {error && <Text style={styles.error}>{error}</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        padding: 12,
        fontSize: 16,
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
    error: {
        color: "red",
        marginTop: 5,
        fontSize: 14,
    },
    textarea: {
        padding: 12,
        fontSize: 16,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});
