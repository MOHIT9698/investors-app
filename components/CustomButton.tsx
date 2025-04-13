import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { BackIcon } from "./ui/Icons/Svg";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  borderRadius?: number;
  fontSize?: number;
  variant: "contained" | "outlined" | "text";
  prefixIcon?: any;
  customButtonStyle?:any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  color,
  textColor,
  variant = "contained",
  borderRadius,
  prefixIcon,
  fontSize,
  customButtonStyle,
}) => {

  const customBgColor = color ?? variant === "contained" ? "#00bdff" : "#FFFFFF";
  const customTextColor = textColor ?? variant === "contained" ? "#FFFFFF" : "#00bdff";
  const customBorderWidth = variant === "outlined" ? 2 : 0;
  const customBorderColor = variant === "outlined" ? "#00bdff" : "";
  const customBorderRadius = borderRadius ?? 10;

  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyle, { backgroundColor: customBgColor, borderWidth: customBorderWidth, borderColor: customBorderColor, borderRadius: customBorderRadius }]}
      onPress={onPress}
    >
      {
        prefixIcon && <View style={styles.prefix} >{prefixIcon}</View>
      }
      <Text style={[styles.text, { color: customTextColor,fontSize: fontSize ?? 18 }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    // borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection:"row",
    gap: 5
  },
  text: {
    // fontSize: 18,
    fontWeight: "500",
  },
  prefix:{
    // backgroundColor:"red"
  }
});

export default CustomButton;
