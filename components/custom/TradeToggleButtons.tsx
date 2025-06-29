import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TradeArrowDown, TradeArrowUp } from '../ui/Icons/Svg'

interface MainProps {
  value: string;                // controlled value for form
  onChange: (data: string) => void; // function to update form value
  btn1: string;
  btn2: string;
}

const TradeToggleButtons = ({
  value = "",
  onChange,
  btn1 = "one",
  btn2 = "two",
}: MainProps) => {

  const ActiveClass = (type: string) => {
    if (value === type) {
      return {
        bg: "#00bdff",
        text: "white",
      }
    } else {
      return {
        bg: "transparent",
        text: "#ccd1d1",
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.leftButton, { backgroundColor: ActiveClass(btn1).bg }]}
        onPress={() => onChange(btn1)}
      >
        <TradeArrowUp color={value === btn1 ? "white" : "#ccd1d1"} />
        <Text style={[styles.text, { color: ActiveClass(btn1).text }]}>{btn1}</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={[styles.button, styles.rightButton, { backgroundColor: ActiveClass(btn2).bg }]}
        onPress={() => onChange(btn2)}
      >
        <TradeArrowDown color={value === btn2 ? "white" : "#ccd1d1"} />
        <Text style={[styles.text, { color: ActiveClass(btn2).text }]}>{btn2}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default TradeToggleButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccd1d1",
    borderRadius: 10,
    height: 45,
    backgroundColor: "transparent"
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  leftButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  divider: {
    height: "100%",
    width: 1,
    backgroundColor: '#ccd1d1',
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 8,
  },
})
