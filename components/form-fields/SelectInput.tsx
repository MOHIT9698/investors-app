import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BackIcon } from "../ui/Icons/Svg";

interface OptionType {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  value: string;
  placeholder: string;
  onSelect: (selected: string) => void;
  options: OptionType[];
  error?: string;
}

const FormSelectDropdown = ({
  label,
  value,
  placeholder,
  onSelect,
  options,
  error,
}: Props) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  const handleSelect = (item: OptionType) => {
    onSelect(item.value);
    setOpen(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOpen(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}

        <TouchableOpacity
          style={[styles.input, error && { borderColor: "red" }]}
          onPress={(e) => {
            e.stopPropagation?.();
            setOpen(!open);
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
            <Text style={{ color: value ? "#000" : "#999", }}>
              {selectedLabel || placeholder}
            </Text>
            <BackIcon style={{ transform: [{ rotate: open ? "90deg" : "270deg" }] }} />
          </View>
        </TouchableOpacity>

        {open && (
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectDropdown;



const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#566573",
    marginBottom: 5,
  },
  input: {
    padding: 12,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    position: "relative"
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 150,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 14,
  },
});