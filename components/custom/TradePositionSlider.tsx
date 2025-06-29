// src/components/FormSliderField.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider"; // ✅ Correct import

interface Props {
  label?: string;
  valType?: string;
  value: number;
  onChange: (val: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  showRange?: boolean;
  rangeLabels?: string[];
  disabled?: boolean;

}

const TradePositionSlider = ({
  label = "Slider",
  value,
  onChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  rangeLabels,
  valType,
  disabled = false,

}: Props) => {
  return (

    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[{ width: "100%", borderColor: "gray", borderWidth: 1, padding: 8, borderRadius: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, disabled && { backgroundColor: "#ccd1d1" },]} >
        <View style={{ width: "80%" }}>
          {rangeLabels?.length && <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
            {rangeLabels?.map((ele,index) => <Text key={index}> {ele}</Text>)}

          </View>}

          <Slider
            style={{ width: "100%" }}
            value={value}
            onValueChange={onChange}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            step={step}
            minimumTrackTintColor="#00bdff"
            maximumTrackTintColor={disabled ? "#626666" :"#ccc"}
            thumbTintColor={disabled ? "#626666" : "#00bdff"}
            disabled={disabled}

          />
        </View>
        <View style={styles.valueRow}>
          <Text style={[styles.percentageText, disabled && { color: "#626666" }]}>{value}{valType ?? ""}</Text>
        </View>
      </View>
    </View>
  );
};

export default TradePositionSlider;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#566573",
    marginBottom: 8,
  },
  valueRow: {
    alignItems: "flex-end",
    marginBottom: 5,
    borderWidth: 1,
    padding: 6,
    borderRadius: 10
  },
  percentageText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00bdff",
  },
});
