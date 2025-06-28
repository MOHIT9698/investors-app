import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TradeArrowUp } from '../ui/Icons/Svg'

interface MainProps {
  active: string;
  setActive: (data: string) => void;
  btn1: string;
  btn2: string;
}

const TradeToggleButtons = ({
  active = "",
  setActive,
  btn1 = "one",
  btn2 = "two",

}: MainProps) => {

  const ActiveClass = (type: string) => {
    if (active === type) {
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
        style={[styles.button1, { backgroundColor: ActiveClass(btn1)?.bg }]}
        onPress={() => { setActive(btn1) }}
      >
        <View ><TradeArrowUp color={active === btn1 ? "white" : "#ccd1d1"} /> </View>

        <Text style={{ color: ActiveClass(btn1)?.text, fontWeight: "500", fontSize: 18 }}>{btn1}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />      <TouchableOpacity
        style={[styles.button2, { backgroundColor: ActiveClass(btn2)?.bg }]}
        onPress={() => { setActive(btn2) }}
      >
        <View ><TradeArrowUp color={active === btn2 ? "white" : "#ccd1d1"} /> </View>

        <Text style={{ color: ActiveClass(btn2)?.text, fontWeight: "500", fontSize: 18 }}>{btn2}</Text>
      </TouchableOpacity>


    </View>
  )
}

export default TradeToggleButtons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccd1d1",
    borderRadius: 10,
    height: 45,
    backgroundColor: "transparent"

  },
  button1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "red",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "49.5%",
    height: "100%"
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "red",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "49.5%",
    height: "100%"

  },
  activeClass: {
    backgroundColor: "#00bdff",
    color: "white",
  },

  divider: {
    height: "100%",
    width: 1,
    backgroundColor: '#ccd1d1',
  },
})